require('dotenv').config()
const fs = require("fs")
const express = require ("express");
const { error } = require('console');
const app = express();
const port = process.env.PORT;
app.listen(port , ()=>console.log(`Server is running on port ${port}`));


app.use(express.json());



app.get("/" ,(req,res) =>{
    fs.readFile("database.json" ,"utf8" ,(err,data)=>{
        if (err ) res.status (400).json ({err})
        if (data ) res.status (200).json ({data : JSON.parse (data)})
    })
});



// app.post("/" ,(req,res) =>{
//     console.log(req.body)
//     res.status(201).json({msg:"Post Request"})
// });

// app.put("/:id" ,(req,res) =>{
//     res.status(201).json({id :req.params.id})
// });
// app.delete("/:id" ,(req,res) =>{
//     console.log(req.body)
//     res.status(201).json({id :req.params.id})
// });