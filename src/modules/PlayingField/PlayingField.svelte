<script>
    import Box from './Box.svelte';
    import Button from '../Reusable/Button.svelte';

    let boxes = [1,2,3,4,5,6,7,8,9];
</script>

<style>
    #container {
        display: grid;
        grid-template-rows: 80% 20%;
        align-items: center;
        justify-items: center;
    }

    #box-container {
        width: 60vh;
        height: 60vh;
        background-color: #81a1c1;
        border-radius: 1%;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        align-items: center;
        justify-items: center;

        margin: auto;
    }

    #button-container {

    }

</style>

<div id="container">
    <div id="box-container">
        {#each boxes as box}
            <Box id={box}></Box>
        {/each}
    </div>
    <div id="button-container">
        <Button>
            <p>Reset game</p>
        </Button>
    </div>
</div>