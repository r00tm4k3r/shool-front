<template>
	<div class="coaches-view">
		<v-container class="d-flex flex-column">
            <v-row>
                <v-col cols="4" v-for="coach in allCoaches" v-bind:key="coach.CoachId">
                    <CoachCard v-bind:human="coach" />
                </v-col>
            </v-row>
		</v-container>
	</div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: 'CoachesView',
        
        components: {
            CoachCard: () => import('@/components/uiElements/cards/CoachCard'),
        },
        methods: {
            ...mapActions(['getCoaches'])
        },
        computed: mapGetters(['allCoaches']),
        created() {this.getCoaches()}
    }
</script>
