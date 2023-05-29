<template>
	<v-app>
		<AppHeader />
		<v-main class="">
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
	import AppHeader from './components/ConstElements/AppHeader.vue';

	export default {
		name: 'App',

		components: {
			AppHeader
		},

		data: () => ({
			
		}),
	};
</script>