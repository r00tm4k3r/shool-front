import Vuex from 'vuex'
import Vue from 'vue'
import sportsmans from './sportsmans'
import schedule from './schedules'
import coaches from './coaches'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        sportsmans,
        schedule,
        coaches
    }
})