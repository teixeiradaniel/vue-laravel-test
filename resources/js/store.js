import Vue from 'vue'
import Vuex from 'vuex'
import spaStore from './views/vuex/store'
import usersStore from './views/users/vuex/store'
import companiesStore from './views/companies/vuex/store'
import jobsStore from './views/jobs/vuex/store'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        spaStore,
        usersStore,
        companiesStore,
        jobsStore
    }
})