<script>
	import PlayingField from './PlayingField/PlayingField.svelte';
</script>

<style>
	#background {
		margin: 0;
		padding: 0;
		width: 100vw;
		height: 100vh;
		background: linear-gradient(180deg, black, rgb(31, 29, 29));
	}
</style>

<div id="background">
	<PlayingField></PlayingField>
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