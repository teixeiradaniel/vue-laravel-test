import axios from 'axios'

export default {
    setCompany({commit},company){
        commit('setCompany',company)
    },
    async companiesLoad({commit}){
        try{
            const request = await  axios.get('companies')
            commit('setCompanies',request.data)
        }catch (e){
            console.log(e)
            throw new Error(e.response.data.error)
        }
    },
    async companyLoad({commit},id){
        try{
            const request = await  axios.get(`companies/${id}`)
            commit('setCompany',request.data)
        }catch (e){
            throw new Error(e.response.data.error)
        }
    },
    async companyCreate({ dispatch }, company){
        try{
            const request = await  axios.post(`companies`, company)

            dispatch('companiesLoad')

            return request
        }catch (e){
            console.log(e.response)
            throw new Error(e.response.data.error)
        }
    },
    async companyUpdate({ dispatch }, company){
        try{
            console.log(company)
            const request = await  axios.put(`companies/${company.id}`, company)

            dispatch('companiesLoad')

            return request
        }catch (e){
            console.log(e)
            throw new Error(e.response.data.error)
        }
    },
    async companyDestroy({ dispatch },company){
        console.log(company)
        try{
            console.log(company)
            const request = await  axios.delete(`companies/${company.id}`)

            dispatch('companiesLoad')

            return request
        }catch (e){
            console.log(e)
            throw new Error(e.response.data.error)
        }
    }
}