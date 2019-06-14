<script>
    import { createEventDispatcher } from 'svelte'
    export let playerMark = "None";
    export let id;
</script>

<style>
    .box {
        width: 50px;
        height: 50px;
        background-color: blue;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

<div class="box">
    <p>{id}</p>
</div>