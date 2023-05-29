import { scheduleAxios } from "@/axios/schedules"
const state = {
    schedule: []
}

const getters = {
    allLessons: state => state.schedule
}

const actions = {
    async getSchedule({commit}){
        const response = await scheduleAxios.getSchedule()
        commit('gSchedule', response.data)
    }
}

const mutations = {
    gSchedule: (state, schedule) => state.schedule = schedule
}

export default{
    state, getters, actions, mutations
}