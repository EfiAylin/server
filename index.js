const express = require('express'); 
const app = express();

app.get('/', (req, res) => {
    res.send({ h1: 'sssssssssssssss' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`app listening on port ${PORT}!`));