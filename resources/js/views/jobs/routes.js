import JobsList from './JobsList'

import ContainerRouter from './../Container'

export default [
    {
        path:'vagas',
        component:ContainerRouter,
        children:[
            {
                path:'',
                name:'vagas',
                component: JobsList
            }
        ]
    },
]