require('dotenv').config()

const express = require ("express")
const app = express();
const port = process.env.PORT;
app.listen(port , ()=>console.log(`Server is running on port ${port}`));


app.use(express.json());



app.get("/" ,(req,res) =>{
    res.status(200).json({msg:"Get Request"})
});



app.post("/" ,(req,res) =>{
    console.log(req.body)
    res.status(201).json({msg:req.body})
});


app.put("/:id" ,(req,res) =>{
    res.status(201).json({id:req.params.id})
});