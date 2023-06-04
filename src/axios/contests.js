import { defaultInstance } from "."

export const contestsAxios = {
    async getContests() {
        return await defaultInstance.get('/contests')
    }
}