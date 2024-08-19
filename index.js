require('dotenv').config()
const fs = require("fs")
const express = require ("express");
const { error } = require('console');
const app = express();
const port = process.env.PORT;
app.listen(port , ()=>console.log(`Server is running on port ${port}`));


app.use(express.json());



app.post("/" ,(req,res) =>{
    fs.readFile("database.json" ,"utf8" ,(err,data)=>{
        if (err ) res.status (400).json ({err})
        if (data ) {
            const parsedData = JSON.parse(data);
            const id = parsedData['last_ID'] + 1;
            const {name} = req.body;
            const users = parsedData['users']
users.push({id :id["last_id"] + 1 ,name})
fs.writeFile("database.json" , JSON.stringify({users ,last_ID:id}),(err)=>{
    if (err){
        res.status(400).json({err})
    }
    else{
        res.status(200).json({msg:`A new user is added with the id ${id}`})
    }
})
        }
    })
});



app.post("/" ,(req,res) =>{
    console.log(req.body)
    res.status(201).json({msg:"Post Request"})
});

app.put("/:id" ,(req,res) =>{
    res.status(201).json({id :req.params.id})
});
app.delete("/:id" ,(req,res) =>{
    console.log(req.body)
    res.status(201).json({id :req.params.id})
});