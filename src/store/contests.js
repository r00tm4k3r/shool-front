import { contestsAxios } from "@/axios/contests"
const state = {
    contests: []
}

const getters = {
    allContests: state => {return state.contests}
}

const actions = {
    async getContests({commit}){
        const response = await contestsAxios.getContests()
        let cons = []
        const data = response.data

        data.forEach(el => {
            cons.push({
                id: el.ContestId,
                name: el.ContestName,
                start: new Date(el.DateStart),
                end: new Date(el.DateEnd),
                color: 'red darken-1',
                timed: true
                
            })
        });
        commit('gContests', cons)
    }
}

const mutations = {
    gContests: (state, contests) => state.contests = contests
}

export default{
    state, getters, actions, mutations
}