import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <Link to="join">Join</Link><span> </span>
      <Link to="chat">Chat</Link>
    </div>
  )
}

export default Nav
