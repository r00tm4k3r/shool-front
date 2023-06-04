import Vuex from 'vuex'
import Vue from 'vue'
import sportsmans from './sportsmans'
import schedule from './schedules'
import contests from './contests'
import coaches from './coaches'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        sportsmans,
        schedule,
        contests,
        coaches
    }
})