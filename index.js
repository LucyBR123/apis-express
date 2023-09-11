const express = require('express');
const { send } = require('express/lib/response');
const app  = express();

app.get("/", (req,res, next) =>{

    res.status(200)
    res.send("Bienvenidos")

})


app.listen(3000, () => {
    console.log("server is running...");
});