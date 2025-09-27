const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.get('/hello', (req, res)=>{
    res.send("Hello world!")
})
app.listen(9000, ()=>{
    console.log('server is running on port 9000')
})