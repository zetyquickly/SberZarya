const path = require('path');
const express = require('express');
const app = express();
require("dotenv").config();
const port = Number(process.env.PORT) || 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(port, () => {
    console.log("Server working at http://localhost:"+port)
});