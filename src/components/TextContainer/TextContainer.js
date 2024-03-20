import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h2>Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h2>
      <h4>Created with React, Express, Node and Socket.IO <span role="img" aria-label="emoji">❤️</span></h4>
      <h4>Mady by <strong>Sajeed Syed :)</strong></h4>
    </div>
    {
      users
        ? (
          <div>
            <h1>Online</h1>
            <hr/>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;