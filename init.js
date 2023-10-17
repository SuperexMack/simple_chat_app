const mongoose = require("mongoose")
const Chat =  require("./Models/chat.js")

async function main() {

await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
          
}
        
main()

.then(()=>{
        
console.log("Connection successful")
        
})
        
.catch(err => console.log(err));
    

let allChats = ([

{from:"Bharat Sati",
to: "Mom",
msg : "Hello Mom how are you?",
created_at: new Date(),
},
   
{from:"Rahul",
to: "Aman",
msg : "Hello Aman",
created_at: new Date(),
} ,
  
{from:"Nikhi",
to: "Steve",
msg : "Hello Steve",
created_at: new Date(),
} ,
  
{from:"Amit",
to: "Mohit Sati",
msg : "Hello Viiii",
created_at: new Date(),
} 
  


])
    

    


Chat.insertMany(allChats)



























