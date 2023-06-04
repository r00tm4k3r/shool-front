<template>
	<v-container>
		{{dt}}
	</v-container>
</template>

<script>
    import {mapActions} from 'vuex'
	export default {
		name: 'testView',
        data: () => ({
            ts: []
        }),
        methods: {
            ...mapActions(['getContests', 'getSchedule'])
        },
        computed: {
            dt() {
                const cons = this.$store.state.contests
                const scd = this.$store.state.schedule
                return [cons['contests'], scd['schedule']]
            }
        },
        created() {this.getContests(); this.getSchedule()}
	}
</script>