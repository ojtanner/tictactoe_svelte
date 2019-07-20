<script>
    import { createEventDispatcher } from 'svelte'
    import stores from '../../js/gameLogicStore.js';
    export let state;
    const { PlayingFieldStore } = stores;

    $: playerMark = state.mark;
    $: id = state.id;

    function executeTurn() {
        PlayingFieldStore.executeTurn(id - 1);
    }
</script>

<style>
    .box {
        width: 90%;
        height: 90%;
        background-color: #db88cb;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .box:nth-child(1) {
        border-top-left-radius: 30%;
    }

    .box:nth-child(3) {
        border-top-right-radius: 30%;
    }

    .box:nth-child(7) {
        border-bottom-left-radius: 30%;
    }

    .box:nth-child(9) {
        border-bottom-right-radius: 30%;
    }

    p {
        font-size: 5vh;
        margin: 0;
    }
</style>

<div class="box" on:click={executeTurn}>
    {#if playerMark !== 'None'}
    <p>{playerMark}</p>
    {:else}
    <p></p>
    {/if}
</div>