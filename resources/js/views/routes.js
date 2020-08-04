import Layout from './../components/Layout'
import Dashboard from './Dashboard'
import usersRoutes from './users/routes'
import companiesRoutes from './companies/routes'
import jobsRoutes from './jobs/routes'

export default [
    {
        path:'/',
        component: Layout,
        meta:{
            authenticated: true
        },
        children:[
            {
                path:'',
                name:'dashboard',
                component: Dashboard,
            },
            ...usersRoutes,
            ...companiesRoutes,
            ...jobsRoutes
        ]
    }
]