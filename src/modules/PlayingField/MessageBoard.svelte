<script>
    import stores from '../../js/gameLogicStore.js';
    const { CurrentPlayerStore } = stores;

    $: storeState = CurrentPlayerStore.subscribe(data => storeState = data);
    $: currentPlayer = storeState.currentPlayer;
    $: winner = storeState.winner;
    $: uninitialized = typeof winner === 'undefined' ? true : false;
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    .message-container {
        text-align: center;
    }

    h1 {
        font-size: 30px;
        line-height: 10vh;
    }
</style>

<div class="message-container">
    {#if uninitialized}
        <h1>First Turn: X</h1>
    {:else}
        {#if winner === 'None'}
            <h1>Current Player: {currentPlayer}</h1>
        {:else}
            <h1>Winner: {winner}</h1>
        {/if}
    {/if}
</div>