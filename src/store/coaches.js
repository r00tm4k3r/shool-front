import { coachesAxios } from "@/axios/coaches"
const state = {
    coaches: [],
    deleteState: ''
}

const getters = {
    allCoaches: state => state.coaches
}

const actions = {
    async getCoaches({commit}){
        const response = await coachesAxios.getCoaches()
        commit('gCoaches', response.data)
    },
    async deleteCoach({commit}, id){
        await coachesAxios.deleteCoach(id)
        commit('dState')
    }
}

const mutations = {
    gCoaches: (state, coaches) => state.coaches = coaches,
    dState: (state) => state.dState = "ok"
}

export default{
    state, getters, actions, mutations
}