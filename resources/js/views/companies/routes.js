import CompaniesList from './CompaniesList'
import CompanyCreate from './CompanyCreate'
import CompanyEdit from './CompanyEdit'

import ContainerRouter from './../Container'

export default [
    {
        path:'empresas',
        component:ContainerRouter,
        children:[
            {
                path:'',
                name:'empresas',
                component: CompaniesList
            },
            {
                path:'create',
                name:'empresas.create',
                component: CompanyCreate
            },
            {
                path:'edit/:id',
                name:'empresas.edit',
                component: CompanyEdit
            }
        ]
    },
]