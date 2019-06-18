<script>
    import { createEventDispatcher } from 'svelte'
    export let playerMark = "None";
    export let id;
</script>

<style>
    .box {
        width: 90%;
        height: 90%;
        background-color: #b48ead;
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
</style>

<div class="box">
    <p>{id}</p>
</div>