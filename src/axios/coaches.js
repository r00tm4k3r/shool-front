import { defaultInstance } from "."

export const coachesAxios = {
    async getCoaches() {
        return await defaultInstance.get('/coaches')
    },
    async deleteCoach(id){
        return await defaultInstance.delete(`/coaches/${id}`)
    }
}