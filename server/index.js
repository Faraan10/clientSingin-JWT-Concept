const express=require("express")
const app=express();
const port=4000
const cors=require("cors")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const User=require('./models/user')
const jwt=require('jsonwebtoken')

mongoose.connect("mongodb+srv://faraan:faraan@cluster0.akvpjxh.mongodb.net/newregister?retryWrites=true&w=majority")
    .then(()=>{
        console.log("MongoDB Connected")
    })
    .catch((err)=>{
        console.log(err)
    })
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(bodyParser.json())

app.use(cors())

app.get("/",(req,res)=>{
    res.send("Working server")
})

app.post('/api/register', async (req,res)=>{
    console.log(req.body)
    try{
        await User.create({
            name: req.body.name,
            email:req.body.email,
            password:req.body.password,

        })
        res.json({status: 'ok'})
    } catch (err) {
        res.json({status:'error', error: 'Duplicate email'})
    }
})


app.post('/api/login', async (req,res)=>{

        const user=await User.findOne({
            email:req.body.email,
            password:req.body.password,
        })

        if (user) {
            const token= jwt.sign(
                {
                    name: user.name,
                    email: user.email,
                },
                'secret12345'
            )
            return res.json({status:'ok', user:token})
        } else {
            return res.json({status:'error', user: false})
        }
})




app.listen(port,()=>console.log("port is running"))