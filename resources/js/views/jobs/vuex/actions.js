import axios from 'axios'

export default {
    setJob({commit},job){
        commit('setJob',job)
    },
    async jobsLoad({commit}){
        try{
            const request = await  axios.get('jobs')
            commit('setJobs',request.data)
        }catch (e){
            console.log(e)
            throw new Error(e.response.data.error)
        }
    },
    async jobLoad({commit},id){
        try{
            const request = await  axios.get(`jobs/${id}`)
            commit('setJob',request.data)
        }catch (e){
            throw new Error(e.response.data.error)
        }
    },
    async jobCreate({ dispatch }, job){
        try{
            const request = await  axios.post(`jobs`, job)

            dispatch('jobsLoad')

            return request
        }catch (e){
            console.log(e.response)
            throw new Error(e.response.data.error)
        }
    },
    async jobUpdate({ dispatch }, job){
        try{
            console.log(job)
            const request = await  axios.put(`jobs/${job.id}`, job)

            dispatch('jobsLoad')

            return request
        }catch (e){
            console.log(e)
            throw new Error(e.response.data.error)
        }
    },
    async jobDestroy({ dispatch },job){
        console.log(job)
        try{
            console.log(job)
            const request = await  axios.delete(`jobs/${job.id}`)

            dispatch('jobsLoad')

            return request
        }catch (e){
            console.log(e)
            throw new Error(e.response.data.error)
        }
    }
}