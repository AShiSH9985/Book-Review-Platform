const express=require("express");
const cors=require('cors');
const app=express();
const mongoose =require('mongoose');
const port=5000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/signinform")
    .then(()=>console.log("Mongodb connected"))
    .catch((err)=>console.log(err));

const userSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:String,
});

const User=mongoose.model('User',userSchema);

// Route
app.post("/api/users/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully!", user: newUser });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong!" });
  }
});


app.get('/api/data',(req,res)=>{
    res.json({message:"Data from Node.js Backend!"});
});

app.get('/create',(req,res)=>{
    const user=new User({
        username,
        email,
        password
    })
    user.save().then(()=>{
        res.send("User created");
    }).catch((err)=>{		   
        console.log(err);
    });
});

app.listen(port,()=>{
    console.log(`Backend server is running on https://localhost:${port}`);  
})