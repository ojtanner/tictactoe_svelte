<script>
    import Box from './Box.svelte';

    let boxes = [1,2,3,4,5,6,7,8,9];
</script>

<style>
    #box-container {
        width: 60vw;
        height: 60vh;
        background-color: aliceblue;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        align-items: center;
        justify-items: center;
    }
</style>

<div id="box-container">
    {#each boxes as box}
        <Box id={box}></Box>
    {/each}
</div>