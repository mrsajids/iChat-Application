const express=require('express')
const app=express()
const socketio=require('socket.io')
const http=require('http')
const router=require('./router')

const PORT = process.env.PORT || 5000;

const server=http.createServer(app)
const io=socketio(server)

//router
app.use(router)


server.listen(PORT,()=>console.log('server running on ',PORT))