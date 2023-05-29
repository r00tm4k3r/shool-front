<template>
    <nav app flat class="grey lighten-3">
        <v-container>
            <v-toolbar flat class="grey lighten-3">
                <v-toolbar-title class="ma-0">
                    <span class="text-uppercase font-weight-medium">Sportик</span>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items class="align-center">
                    <router-link 
                    v-for="topic in topics" 
                    :key="topic.title" 
                    :to="topic.router" 
                    flat 
                    class="text-decoration-none font-weight-medium px-3 button text--primary">
                        {{topic.title}}
                    </router-link>
                </v-toolbar-items>
            </v-toolbar>
        </v-container>
    </nav>
</template>

<script>
    
    export default {
        name: 'AppHeader',
        data: () => ({
            tab: null,
            topics: [
                {id: 1, title: 'Расписание', router: '/schedule'},
                {id: 2, title: 'Соревнования', router: '/contests'},
                {id: 3, title: 'Тренера', router: '/coaches'},
                {id: 4, title: 'Спортсмены', router: '/sportsmans'}
            ],
        })
    }
</script>