import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';
import icon from '../../icons/icon.png'
import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">

    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
        <img className='ichaticon' src={icon} alt="icon" /><div className='ichattext'>iChat</div>
    <div className="rightInnerContainer">
      <a href="/"><img src={closeIcon} alt="close icon" /></a>
    </div>
  </div>
);

export default InfoBar;