<script>
    import stores from '../../js/gameLogicStore.js';
    const { PlayingFieldStore } = stores;
</script>

<style>

    #button {
        width: 100%;
        height: 100%;

        background-color: #81a1c1;
        color: #3b4252;
        font-size: 1.5em;
        border-radius: 5%;
    }

    #button > p {
        margin: 0;   
    }

</style>

<button type="button" id="button" on:click={PlayingFieldStore.resetGame}>
    <p>Reset game</p>
</button>