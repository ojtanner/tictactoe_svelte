<script>
    export let usage;
</script>

<style>
    * {
        margin: 0;
    }

    .container {
        display: flex;                  /* Enable justify-content and align-items */
        justify-content: center;        /* Center vertically */
        align-items: center;            /* Center horizontally */
        width: 100%;                    
        background-image: linear-gradient(to right, #355479, #8eb3e0);

        font-size: 3em;
    }

    .header {
        border-bottom: 1px solid black;
        height: 60px;
    }

    .footer {
        border-top: 1px solid black;
        height: 100px;
    }
</style>

{#if usage === "header"}
    <div class="container header">
        <slot></slot>
    </div>

{:else if usage === "footer"}
    <div class="container footer">
        <slot></slot>
    </div>

{:else}
    <div class="container">
        <slot></slot>
    </div>
{/if}
