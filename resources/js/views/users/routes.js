import UsersList from './UsersList'
// import UserCreate from './UserCreate'
// import UserEdit from './UserEdit'

import ContainerRouter from './../Container'

export default [
    {
        path:'users',
        component:ContainerRouter,
        children:[
            {
                path:'',
                name:'users',
                component: UsersList
            },
            // {
            //     path:'create',
            //     name:'users.create',
            //     component: UserCreate
            // },
            // {
            //     path:'edit/:id',
            //     name:'users.edit',
            //     component: UserEdit
            // }
        ]
    },
]