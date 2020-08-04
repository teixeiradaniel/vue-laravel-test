import axios from "axios";

export default {
    async makeLogin({ commit }, data){
        try{
            const request = await axios.post('login',{email: data.email, password: data.password})

            localStorage.setItem('token', request.data.token)

            localStorage.setItem('loggedUser', JSON.stringify(request.data.user))

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + request.data.token;

            commit('setLoggedUser')

            return request.data
        }catch (e) {
            throw new Error(e.response.data.error)
        }
    },
    async checkLogin({ commit }){
        try{
            const request = await axios.get('user')

            if(request.status !== 200){
                return false
            }else {
                localStorage.setItem('loggedUser', JSON.stringify(request.data))
                commit('setLoggedUser', request.data)
                return true
            }
        }catch (e) {
            throw new Error(e.message)
        }
    },
    async changeBackUrl({commit}, backUrl) {
        commit('changeBackUrl',backUrl)
    },
    setMessage({ commit }, message){
        commit('setMessage', message)
    },
    logout({commit}){
        commit('logout')
    }
}