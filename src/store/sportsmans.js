import { sportsmansAxios } from "@/axios/sportsmans"
const state = {
    sportsmans: [],
    deleteState: ''
}

const getters = {
    allSportsmans: state => state.sportsmans
}

const actions = {
    async getSportsmans({commit}){
        const response = await sportsmansAxios.getSportsmans()
        commit('gSportsmans', response.data)
    },
    async deleteSportsman({commit}, id){
        await sportsmansAxios.deleteSportsman(id)
        commit('dState')
    }
}

const mutations = {
    gSportsmans: (state, sportsmans) => state.sportsmans = sportsmans,
    dState: (state) => state.dState = "ok"
}

export default{
    state, getters, actions, mutations
}