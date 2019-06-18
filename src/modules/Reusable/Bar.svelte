<script>
</script>

<style>

* {
    margin: 0;
}

#container {
    display: flex;                  /* Enable justify-content and align-items */
    justify-content: center;        /* Center vertically */
    align-items: center;            /* Center horizontally */
    width: 100%;                    
    height: 7vh;
    background-color: #5e81ac;

    font-size: 3em;
}

</style>

<div id="container">
    <slot></slot>
</div>