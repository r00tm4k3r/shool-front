import { scheduleAxios } from "@/axios/schedules"
const state = {
    schedule: []
}

const getters = {
    allLessons: state => {return state.schedule}
}

const actions = {
    async getSchedule({commit}){
        const response = await scheduleAxios.getSchedule()
        let schedule = []
        const data = response.data

        data.forEach(el => {
            let gender = (el.SectionGenderId == 1)? ' мужская группа' : ' женская группа'
            const floor = (el.ProjectileFloor) ? `${el.ProjectileFloor} этаж` : ''
            schedule.push({
                id: el.ScheduleId,
                name: el.SectionName + gender,
                details: 
                `Тренер: ${el.FullName} <br>
                Площадка для тренеровок: ${el.ProjectileName} ${floor} <br>
                Время: ${new Date(el.DateStart).toLocaleTimeString()} - ${new Date(el.DateEnd).toLocaleTimeString()}
                `,
                start: new Date(el.DateStart),
                end: new Date(el.DateEnd),
                color: 'green darken-1',
                timed: true
                
            })
        });
        commit('gSchedule', schedule)
    }
}

const mutations = {
    gSchedule: (state, schedule) => state.schedule = schedule
}

export default{
    state, getters, actions, mutations
}