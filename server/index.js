const express=require('express')
const app=express()
const socketio=require('socket.io')
const http=require('http')
const router=require('./router')
const cors=require('cors')
app.use(cors())
const PORT = process.env.PORT || 5000;

const server=http.createServer(app)
const io=socketio(server)

io.on('connection',(socket)=>{
    console.log("We have a new connection!");
    
    socket.on('disconnect',()=>{
        console.log("User had left!!");
    })
})

//router
app.use(router)



server.listen(PORT,()=>console.log('server running on ',PORT))