import axios from 'axios'

export default {
    setUser({commit},user){
        commit('setUser',user)
    },
    async usersLoad({commit}){
        try{
            const request = await  axios.get('users')
            commit('setUsers',request.data)
        }catch (e){
            console.log(e)
            throw new Error(e.response.data.error)
        }
    },
    async userLoad({commit},id){
        try{
            const request = await  axios.get(`users/${id}`)
            commit('setUser',request.data)
        }catch (e){
            throw new Error(e.response.data.error)
        }
    },
    async userCreate({ dispatch },user){
        try{
            const request = await  axios.post(`users`, user)

            dispatch('usersLoad')

            return request
        }catch (e){
            console.log(e.response)
            throw new Error(e.response.data.error)
        }
    },
    async userUpdate({ dispatch }, user){
        try{
            console.log(user)
            const request = await  axios.put(`users/${user.id}`, user)

            dispatch('usersLoad')

            return request
        }catch (e){
            console.log(e)
            throw new Error(e.response.data.error)
        }
    },
    async userDestroy({ dispatch },user){
        console.log(user)
        try{
            console.log(user)
            const request = await  axios.delete(`users/${user.id}`)

            dispatch('usersLoad')

            return request
        }catch (e){
            console.log(e)
            throw new Error(e.response.data.error)
        }
    }
}