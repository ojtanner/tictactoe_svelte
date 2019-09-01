const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.send('/public/index.html');
})

app.listen(process.env.PORT || 4000);