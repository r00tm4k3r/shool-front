<template>
    <v-container>
        <v-btn class="mb-4" align-center @click="createCardWindow = true">
            <v-icon left>mdi-account-plus-outline</v-icon>
            <span>{{text}}</span>
        </v-btn>
        
    
        <v-dialog v-model="createCardWindow" persistent width="1024">
            <v-card>
                <v-card-title>
                    <span class="text-h5">Добавить</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <form lazy-validation>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field label="ФИО (*)" :rules="nameReq" v-model="sportsman.FullName" required />
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Телефон" v-model="sportsman.Phone"/>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Адрес проживания" v-model="sportsman.Address"/>
                                </v-col>
                                <v-col cols="12" sm="4">
                                    <v-text-field label="Возраст (*)" :rules="ageReq" v-model="sportsman.Age" required/>
                                </v-col>
                                <v-col cols="12" sm="4">
                                    <v-select :items="genders" item-text="GenderName" item-value="GenderId" label="Пол (*)" v-model="sportsman.GenderId" required />
                                </v-col>
                                <v-col cols="12" sm="4">
                                    <v-select :items="[1, 2, 3]" label="Разряд (*)" v-model="sportsman.Category" required />
                                </v-col>
                            </v-row>
                        </form>
                        
                    </v-container>
                <small class="red--text text--darken-1">(*) Поля обязательные для заполнения</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="blue-darken-1" text @click="createCardWindow = false">Закрыть</v-btn>
                <v-btn class="green darken-1 white--text text--darken-3" text @click="createCard()">Сохранить</v-btn>
            </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
   
</template>

<script>
    import { sportsmansAxios } from "@/axios/sportsmans"
    export default {
        name: 'AddItem',
        props: ['text'],
        data: function() {
            return {
                createCardWindow: false,
                genders: [
                    {GenderName: 'Мужской', GenderId: 1},
                    {GenderName: 'Женский', GenderId: 2}
                ],
                sportsman: {
                    FullName: '',
                    Age: '',
                    Phone: '',
                    Address: '',
                    GenderId: 1,
                    Category: 3
                },
                nameReq: [v => !!v || 'Необходимо заполнить поле'],
                ageReq: [
                    v => !!v || 'Укажите возраст спортсмена',
                    v => ( v >= 10) || 'Спортсмен должен быть старше 10 лет',
                    v => (v < 18) || 'Спортсмен должен быть младше 18 лет',
                ],
                
            }
        },
        methods: {
            createCard: async function(){
                await sportsmansAxios.createSportsman(this.sportsman)
                this.$router.go()
            }
        }
    }
</script>