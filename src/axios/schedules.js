import { defaultInstance } from "."

export const scheduleAxios = {
    async getSchedule() {
        return await defaultInstance.get('/schedule')
    }
}