import Vue from 'vue'
import Router from 'vue-router'
import Login from './../components/auth/Login'
import viewsRoutes from './../views/routes'

import storeCore from './../store'
import store from "../store";

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '/',
    meta: {
        authenticated: true
    },
    routes: [{
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/logout',
            name: 'logout'
        },
        ...viewsRoutes,
        {
            path: '*',
            redirect: '/dashboard',
        }
    ]
})

router.beforeEach(async (to, from, next) => {
    const isLogged = storeCore.state.spaStore.isLoggedIn
    const authenticated = to.matched.some(m => m.meta.authenticated)

    if (to.name === 'logout') {
        localStorage.removeItem('token')
        localStorage.removeItem('loggedUser')

        return router.push({
            name: 'login'
        })
    }

    try {
        const checkLogin = await store.dispatch('checkLogin')

        if (to.name !== 'login' && !isLogged) {

            if (checkLogin) {
                return router.push({
                    name: to.name
                })
            }
        } else if (!from.name && !isLogged) {
            if (checkLogin) {
                return router.push({
                    name: 'dashboard'
                })
            }
        }
    } catch (e) {
        console.error(e.message)
    }

    if (authenticated && !isLogged) {
        return router.push({
            name: 'login'
        })
    }

    next()
})


export default router
