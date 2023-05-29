<template>
	<v-container>
		<v-row class="fill-height">
			<v-col>
				<v-sheet height="64">
					<v-toolbar flat>
						<v-btn variant="outlined" class="me-4" color="grey-darken-2" @click="setToday">Today</v-btn>
						<v-btn flat variant="text" size="small" color="grey-darken-2" @click="prev">
							<v-icon size="small">mdi-chevron-left</v-icon>
						</v-btn>
						<v-btn flat variant="text" size="small" color="grey-darken-2" @click="next">
							<v-icon size="small">mdi-chevron-right</v-icon>
						</v-btn>
						<v-toolbar-title v-if="$refs.calendar">{{ $refs.calendar.title }}</v-toolbar-title>
						<v-spacer></v-spacer>
						<v-menu location="bottom end">
							<template v-slot:activator="{ on, attrs }">
								<v-btn variant="outlined" color="grey-darken-2" v-bind="attrs" v-on="on">
									<span>{{ typeToLabel[type] }}</span>
									<v-icon end>mdi-menu-down</v-icon>
								</v-btn>
							</template>
						<v-list>
							<v-list-item @click="type = 'day'">
								<v-list-item-title>Day</v-list-item-title>
							</v-list-item>
							<v-list-item @click="type = 'week'">
								<v-list-item-title>Week</v-list-item-title>
							</v-list-item>
							<v-list-item @click="type = 'month'">
								<v-list-item-title>Month</v-list-item-title>
							</v-list-item>
						</v-list>
						</v-menu>
					</v-toolbar>
				</v-sheet>
				<v-sheet height="600">
					<v-calendar ref="calendar" v-model="focus" color="primary"
					:events="allLessons"
					:type="type"
					@click:more="viewDay"
					@click:date="viewDay"
					></v-calendar>
					<v-menu v-model="selectedOpen" :close-on-content-click="false" :activator="selectedElement" offset-x>
						<v-card color="grey-lighten-4" min-width="350px" flat>
							<v-toolbar :color="selectedEvent.color" dark>
								<v-btn icon>
									<v-icon>mdi-pencil</v-icon>
								</v-btn>
								<v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
								<v-spacer></v-spacer>
								<v-btn icon>
									<v-icon>mdi-heart</v-icon>
								</v-btn>
								<v-btn icon>
									<v-icon>mdi-dots-vertical</v-icon>
								</v-btn>
							</v-toolbar>
							<v-card-text>
								<span v-html="selectedEvent.details"></span>
							</v-card-text>
							<v-card-actions>
								<v-btn variant="text" color="secondary" @click="selectedOpen = false"> Cancel</v-btn>
							</v-card-actions>
						</v-card>
					</v-menu>
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
		name: 'ScedulesView',
		data: () => ({
			focus: '',
			type: 'month',
			typeToLabel: {
				month: 'Month',
				week: 'Week',
				day: 'Day',
			},
			selectedEvent: {},
			selectedElement: null,
			selectedOpen: false,
			events: [],
			colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1']
		}),

		methods: {
            ...mapActions(['getSchedule']),
			viewDay ({ date }) {
				this.focus = date
				this.type = 'day'
			},
			setToday () {this.focus = ''},
			prev () {this.$refs.calendar.prev()},
			next () {this.$refs.calendar.next()},
        },
        computed: mapGetters(['allLessons']),
        created() {this.getSchedule()}
	}
</script>