import { defaultInstance } from "."

export const sportsmansAxios = {
    async getSportsmans() {
        return await defaultInstance.get('/sportsmans')
    },
    async createSportsman(payload){
        return await defaultInstance.post('/sportsmans', payload)
    },
    async deleteSportsman(id){
        return await defaultInstance.delete(`/sportsmans/${id}`)
    },
    async editSportsman(id, payload){
        return await defaultInstance.post(`/sportsmans/${id}`, payload)
    }
}