import React, { useEffect, useState } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import { useLocation } from "react-router-dom";

const ENDPOINT = 'http://localhost:5000/';

let socket; 

const Chat = () => {
  const location = useLocation()
  
  useEffect(()=>{
    const data = queryString.parse(location.search);
    socket=io(ENDPOINT)


    console.log(socket);
  },[])
  
  return (
    <div>
     <h1>Chat Page</h1> 
    </div>
  )
}

export default Chat
