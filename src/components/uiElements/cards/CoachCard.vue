<template>
    <v-card>
        <v-card-title class="text-h5">{{human.FullName}}</v-card-title>
                <v-card-subtitle>
                    <v-container class="pa-0">
                        <v-row>
                            <v-col cols="12">
                                <span class="text-h6">Телефон: {{human.Phone}}</span>
                            </v-col>
                            <v-col cols="12">
                                <span class="text-h6">Пол: {{human.GenderName}}</span>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-subtitle>
        <v-card-actions>
            <v-btn
                v-on:click="deleteCardAlert = true"
                class="red darken-1 white--text text--darken-3 pa-5">
                    <v-icon left>mdi-book-open-page-variant-outline</v-icon>
                    <span>Удалить</span>
            </v-btn>
        </v-card-actions>

        <v-dialog v-model="deleteCardAlert" max-width="290">
            <v-card>
                <v-card-title class="text-h5">Удалить запись?</v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="grey darken-1" text @click="deleteCardAlert = false">Нет</v-btn>
                    <v-btn color="red darken-1" text @click="deleteCard(human.CoachId)">Да</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-card>

    
</template>

<script>
    export default {
        name: 'CoachCard',
        data: function(){
            return{
                deleteCardAlert : false,
            }
        },
        props: ["human"],
        methods: {
            deleteCard: function(id){
                this.$store.dispatch('deleteCoach', id)
                this.$router.go()
            },
        }
    }
</script>