<template>
    <v-card>
        <v-card-title class="text-h5">{{human.FullName}}</v-card-title>
        <v-card-subtitle>
            <v-container class="pa-0">
                <v-row>
                    <v-col>
                        <span class="text-h6">{{human.Age}} лет</span>
                    </v-col>
                    <v-col>
                        <span v-if="human.GenderName == 'мужской'" class="text-h6">Парень</span>
                        <span v-else class="text-h6">Девушка</span>
                    </v-col>
                    <v-col>
                        <span class="text-h6">{{human.Category}} разряд</span>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-subtitle>
        <v-card-actions>
            <v-btn
            v-on:click="editCardWindow = true"
            class="grey lighten-2 grey--text text--darken-3 pa-5">
                <v-icon left>mdi-book-open-page-variant-outline</v-icon>
                <span>Изменить</span>
            </v-btn>
            <v-btn
                v-on:click="deleteCardAlert = true"
                class="red darken-1 white--text text--darken-3 pa-5">
                    <v-icon left>mdi-book-open-page-variant-outline</v-icon>
                    <span>Удалить</span>
            </v-btn>
        </v-card-actions>

        <v-dialog v-model="editCardWindow" persistent width="1024">
            <v-card>
                <v-card-title>
                    <span class="text-h5">Изменить</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field label="ФИО (*)" v-model="sportsman.FullName" required />
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Телефон" v-model="sportsman.Phone"/>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Адрес проживания" v-model="sportsman.Address"/>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field label="Возраст (*)" required v-model="sportsman.Age"/>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-select :items="[1, 2, 3]" label="Разряд (*)" v-model="sportsman.Category" required />
                            </v-col>
                        </v-row>
                    </v-container>
                <small small class="red--text text--darken-1">(*) Поля обязательные для заполнения</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="blue-darken-1" variant="text" @click="editCardWindow = false">Закрыть</v-btn>
                <v-btn class="green darken-1 white--text text--darken-3" variant="text" @click="editCard(human.SportsmanId)">Сохранить</v-btn>
            </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog v-model="deleteCardAlert" max-width="290">
            <v-card>
                <v-card-title class="text-h5">Удалить запись?</v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="grey darken-1" text @click="deleteCardAlert = false">Нет</v-btn>
                    <v-btn color="red darken-1" text @click="deleteCard(human.SportsmanId)">Да</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-card>

    
</template>

<script>
    import { sportsmansAxios } from "@/axios/sportsmans"
    export default {
        name: 'SportsmanCard',
        data: function(){
            return{
                deleteCardAlert : false,
                editCardWindow: false,
                sportsman: {
                    FullName: this.human.FullName,
                    Age: this.human.Age,
                    Phone: this.human.Phone,
                    Address: this.human.Address,
                    Category: this.human.Category

                }
            }
        },
        props: ["human"],
        methods: {
            deleteCard: function(id){
                this.$store.dispatch('deleteSportsman', id)
                this.$router.go()
            },
            editCard: async function(id){
                await sportsmansAxios.editSportsman(id, this.sportsman)
                this.$router.go()
            }
        }
    }
</script>