<template>
	<div class="sportsmans-view">
		<v-container class="d-flex flex-column">
            <v-row align="center">
                <AddItem v-bind:text="text"/>
            </v-row>
            
            <v-row>
                <v-col cols="4" v-for="sportsman in allSportsmans" v-bind:key="sportsman.SportsmanId">
                    <HumanCard v-bind:human="sportsman" />
                </v-col>
            </v-row>
		</v-container>
	</div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: 'SportsmansView',
        data: () => ({
            text: "Добавить спортсмена"
        }),
        components: {
            AddItem: () => import('@/components/uiElements/buttons/AddItem'),
            HumanCard: () => import('@/components/uiElements/cards/SportsmanCard'),
        },
        methods: {
            ...mapActions(['getSportsmans'])
        },
        computed: mapGetters(['allSportsmans']),
        created() {this.getSportsmans()}
    }
</script>
