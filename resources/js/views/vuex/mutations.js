export default {
    setLoggedUser(state, loggedUser) {
        state.loggedUser = loggedUser
        state.isLoggedIn = true
    },
    changeBackUrl(state, backUrl) {
        state.backUrl = backUrl
    },
    logout(state) {
        localStorage.removeItem('token')
        localStorage.removeItem('loggedUser')
        delete window.axios.defaults.headers.common['Authorization']
        state.loggedUser = {}
        state.isLoggedIn = false
    }
}
