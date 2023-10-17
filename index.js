const express = require("express")
const app = express()
const mongoose = require("mongoose")
const path  = require("path")
const methodOverride = require("method-override")

const Chat =  require("./Models/chat.js")

app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))


app.set("view engine" , "ejs")
app.set("views" , path.join(__dirname , "views"))

app.use(express.static(path.join(__dirname , "public")))

async function main() {

await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
      
}
    
main().then(()=>{
    
console.log("Connection successful")
    
})
    
.catch(err => console.log(err));



app.get("/chats" , async (req,res)=>{

let chats = await Chat.find() // iske help se backend mai jo saara ka saara data tha wo apne pass aa gya hai
// console.log(chats)

res.render("index.ejs" , {chats})


})


// new route for the new chat
app.get("/chats/new" ,(req,res)=>{

res.render("new.ejs")


})

// create Route

app.post("/chats" , (req,res)=>{

let {from , to , msg} = req.body
let newChat = new Chat({

from: from,
to: to,
msg  : msg,
created_at : new Date()


})

// console.log(newChat)

newChat.save()

.then((res)=>{

console.log(res)

})

.catch((err)=>{


console.log(err)

})


res.redirect("/chats")

})


// Edit Route

app.get("/chats/:id/edit" ,async (req,res)=>{

let {id} = req.params

let chat = await Chat.findById(id)



res.render("edit.ejs" , {chat})



})

// update Route

app.put("/chats/:id" , async(req,res)=>{

let {id} = req.params   
let {msg : newMsg} = req.body

let updateChat = await Chat.findByIdAndUpdate(id , {msg : newMsg} , {runValidators:true , new:true})

console.log(updateChat)

res.redirect("/chats")


})









app.get("/" , (req,res)=>{

res.send("This is your server")


})

















app.listen(8080 , (req,res)=>{

console.log("your server is running on the port Number 8080")


})




