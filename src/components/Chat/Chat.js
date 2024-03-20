import React, { useEffect, useState } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import { useLocation } from "react-router-dom";
import './Chat.css'
import InfoBar from "../InfoBar/InfoBar";
import Messages from '../Messages/Messages'
import Input from '../Input/Input'
import TextContainer from '../TextContainer/TextContainer'
import useSound from "use-sound";
import song from "../../ring.mp3"
const ENDPOINT = 'https://ichatapp-opag.onrender.com';
let socket;

const Chat = () => {

  const location = useLocation()
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [users, setUsers] = useState('')
  const [play]=useSound(song)

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT)

    setName(name)
    setRoom(room)

    socket.emit('join', { name, room }, () => {
      
    })

    return () => {
      socket.emit('disconnect')
      socket.off()
    }

  }, [ENDPOINT, location.search])

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message])
    })

    socket.on('roomData', ({ users }) => {
      setUsers(users)
    })

    //condition for ring
    let size=messages.length
    if(size>1 && name!==messages[size-1].user)
      play()
    
  }, [messages])

  const sendMessage = (event) => {
    event.preventDefault()
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }
  
  return (
    <div>
      <div className="outerContainer">
        <div className="container">
        <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div>
        <TextContainer users={users}/>
      </div>

    </div>
  )
}

export default Chat

