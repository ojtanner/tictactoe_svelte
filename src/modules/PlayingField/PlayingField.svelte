<script>
    import Box from './Box.svelte';
    import Button from '../Reusable/Button.svelte';

    let boxes = [1,2,3,4,5,6,7,8,9];
</script>

<style>
    #container {
        display: grid;
        grid-template-rows: auto 80vh auto;
        align-items: center;
        justify-items: center;
    }

    #box-container {
        grid-row: 2 / 2;
        width: 60vw;
        height: 60vw;
        border-radius: 1%;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        align-items: center;
        justify-items: center;

        margin: auto;
    }

    @media screen and (max-width: 490px) {
        #box-container {
            width: 80vw;
            height: 80vw;
        }
    }

    #button-container {
        grid-row: 3 / 3;
        display: flex;
        align-items: center;
        justify-items: center;
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