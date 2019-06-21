<script>
	import Bar from './Reusable/Bar.svelte';
	import PlayingField from './PlayingField/PlayingField.svelte';
</script>

<style>
	#background {
		margin: 0;
		padding: 0;
		width: 100vw;
		height: 100%;
		background: #d8d8d8;

		display: grid;
		grid-template-rows: auto 1fr auto;
	}
</style>

<div id="background">
	<Bar usage="header">
		<p>Header</p>
	</Bar>
	<PlayingField></PlayingField>
	<Bar usage="footer">
		<p>Footer</p>
	</Bar>
</div>
<!--

header 
	title

playing-field
	current-player
	boxes
	reset-button

footer
	creator

-->