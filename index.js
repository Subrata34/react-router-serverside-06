const express=require('express')
app=express()
port =process.env.port||5000;
const cors=require('cors');
const { MongoClient } = require('mongodb');
const fileupload =require('express-fileupload');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(fileupload());

const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@cluster0.g4aj0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
console.log(uri)

async function run(){
    try{
  await client.connect();
 const database=client.db('database');
 const movie=database.collection('movie');
 const moviecollection=database.collection('user');


app.post('/user',async(req,res)=>{
    console.log('body',req.body);
    console.log('files',req.files);
    res.json({success:true});

})


    }
    finally{
    //await client.close();
    }

}
run().catch(console.dir);


app.get('/',(req,res)=>{
    res.send('hallo world');

})

app.listen(port,()=>{
    console.log('listen to port ',port );
})