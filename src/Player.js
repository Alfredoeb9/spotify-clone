import React from 'react';
import './Player.css';
import Sidebar from './Sidebar';
import Body from './Body';

function Player( {spotify} ) {
  return (
    <div>
      <div className="player">
        <div className="player_body">
          <Sidebar />
          <Body />
        </div>
      </div>
      
      {/* Footer */}
    </div>
  )
}

export default Player;