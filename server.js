const express = require('express');
const path = require('path')
let app = express();

require('dotenv').config();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
app.listen(process.env.PORT, () => {
    console.log('Sever listening on Port:', process.env.PORT);
})