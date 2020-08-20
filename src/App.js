import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useStateValue } from './StateProvider';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{ }, dispatch] = useStateValue();


  // Run code based on a given condition
  useEffect(() => {
    // grab token from url
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if(_token) {
      setToken(_token);
      // give spotify key to react
      spotify.setAccessToken(_token);
      // fetch information from spotify account
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });
    }
  }, []);

  return (
    <div className="app">
      {
        token ? (
          <Player />
        ) : (
          <Login />
        )
      }
      <Login />
    </div>
  );
}

export default App;
