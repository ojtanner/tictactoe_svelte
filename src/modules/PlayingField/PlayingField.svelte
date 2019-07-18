<script>
    import MessageBoard from './MessageBoard.svelte';
    import Box from './Box.svelte';
    import Button from '../Reusable/Button.svelte';

    import fields from '../../js/gameLogicStore.js';
</script>

<style>
    #container {
        display: grid;
        grid-template-rows: 10vh 60vh 10vh;
        align-items: center;
        justify-items: center;
    }

    #message-board-container {
        width: 60vh;
        height: 10vh;
    }

    #box-container {
        grid-row: 2 / 2;
        width: 60vh;
        height: 60vh;

        margin: 0;
        padding: 0;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        align-items: center;
        justify-items: center;
    }

    @media screen and (max-width: 490px) {
        #box-container {
            width: 80vw;
            height: 80vw;
        }
    }

    #button-container {
        grid-row: 3 / 3;
        width: 30vh;
        height: 7vh;
    }

</style>

<div id="container">
    <div id="message-board-container">
        <MessageBoard>
        </MessageBoard>
    </div>
    <div id="box-container">
        {#each $fields as field}
            <Box state={field}></Box>
        {/each}
    </div>
    <div id="button-container">
        <Button>
            <p>Reset game</p>
        </Button>
    </div>
</div>