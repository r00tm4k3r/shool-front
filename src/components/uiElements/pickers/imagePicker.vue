<template>
    <v-container>
			<h1>Загрузить превью</h1>
			<div class="dropbox">
				<input type="file" accept="image/*" multiple class="input-file"/>
			</div>
    </v-container>
</template>
 

<script>
export default {
  name: "imagePicker",
  data() {},
  methods: {},
};
</script>

<style lang="scss">
		.dropbox {
			outline: 2px dashed grey;
			/* the dash box */
			outline-offset: -10px;
			background: lightcyan;
			color: dimgray;
			padding: 10px 10px;
			min-height: 200px;
			/* minimum height */
			position: relative;
			cursor: pointer;
		}
	
		.input-file {
			opacity: 0;
			/* invisible but it's there! */
			width: 100%;
			height: 200px;
			position: absolute;
			cursor: pointer;
		}
	
		.dropbox:hover {
			background: lightblue;
			/* when mouse over to the drop zone, change color */
		}
	
		.dropbox p {
			font-size: 1.2em;
			text-align: center;
			padding: 50px 0;
		}
  
</style>
