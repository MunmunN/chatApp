import React from 'react';

import onLineIcon from './rec.png';
import closeIcon from './cancel.png';
import './InfoBar.css';

const InfoBar=({room})=>(
    <div className="InfoBar">
        <div className="leftContainer">
            <img className="onLineIconImage" src={onLineIcon} alt="online Icon" width='30' height="30">
            
            </img>
            <h3>{room}</h3>

        </div>
        <div className="rightContainer">
            <a href="/"><img className="closeIconImage" src={closeIcon} alt="close Icon" width='30' height="30"></img></a>
            
           

        </div>


    </div>
);
export default InfoBar;