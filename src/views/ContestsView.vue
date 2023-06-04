<template>
	<v-container>
		<v-row class="fill-height">
			<v-col>
				<v-sheet height="64">
					<v-toolbar flat>
						<v-btn variant="outlined" class="me-4" color="grey-darken-2" @click="setToday">Сегодня</v-btn>
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
								<v-list-item-title>День</v-list-item-title>
							</v-list-item>
							<v-list-item @click="type = 'week'">
								<v-list-item-title>Неделя</v-list-item-title>
							</v-list-item>
							<v-list-item @click="type = 'month'">
								<v-list-item-title>Месяц</v-list-item-title>
							</v-list-item>
						</v-list>
						</v-menu>
					</v-toolbar>
				</v-sheet>
				<v-sheet height="600">
					<v-calendar ref="calendar" v-model="focus" color="primary"
					:events="events"
					:event-color="getEventColor"
					:type="type"
					@click:event="showEvent"
					@click:more="viewDay"
					@click:date="viewDay"
					@change="updateRange"
					></v-calendar>
					<v-menu v-model="selectedOpen" :close-on-content-click="false" :activator="selectedElement" offset-x>
						<v-card color="grey-lighten-4" min-width="350px" flat>
							<v-toolbar :color="selectedEvent.color" dark>
								<v-spacer></v-spacer>
								<v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
							</v-toolbar>
							<v-card-text>
								<span v-html="selectedEvent.details"></span>
							</v-card-text>
							<v-card-actions>
								<v-btn variant="text" color="secondary" @click="selectedOpen = false">Закрыть</v-btn>
							</v-card-actions>
						</v-card>
					</v-menu>
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import {mapActions} from 'vuex'
  export default {
    name: 'ContestsView',
    data: () => ({
      focus: '',
      type: 'month',
      typeToLabel: {
        month: 'Месяц',
        week: 'Неделя',
        day: 'День',
      },
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: []
	}),
	created() { this.getContests()},
    mounted () { this.getEvents() },
    methods: {
		...mapActions(['getContests']),

		getEvents () {
			const cns = this.$store.state.contests
			this.events = cns['contests']
		},
		viewDay ({ date }) {
			this.focus = date
			this.type = 'day'
		},
		getEventColor (event) {
			return event.color
		},
		setToday () {
			this.focus = ''
		},
		prev () {
			this.$refs.calendar.prev()
		},
		next () {
			this.$refs.calendar.next()
		},
		showEvent ({ nativeEvent, event }) {
			const open = () => {
			this.selectedEvent = event
			this.selectedElement = nativeEvent.target
			requestAnimationFrame(() => requestAnimationFrame(() => this.selectedOpen = true))
			}

			if (this.selectedOpen) {
			this.selectedOpen = false
			requestAnimationFrame(() => requestAnimationFrame(() => open()))
			} else {
			open()
			}

			nativeEvent.stopPropagation()
		},
		updateRange ({ start, end }) {
				this.start = start
				this.end = end
		},
	},
}
</script>