import React from 'react';
import sendicon from '../../icons/sendicon.png'
import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <img src={sendicon} alt={"send"} onClick={e => sendMessage(e)} className='sendicon'/>
  </form>
)

export default Input;