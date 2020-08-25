import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useStateValue } from './StateProvider';

const spotify = new SpotifyWebApi();

function App() {
  // Grab anything from the data layer in 
  // first variable, Disptach lets you update it with values
  // grab user and token from data layer
  const [{ user, token }, dispatch] = useStateValue();


  // Run code based on a given condition
  useEffect(() => {
    // grab token from url
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if(_token) {

      dispatch({
        type:'SET_TOKEN',
        // pass in a payload of token
        token: _token,
      });
  
      // give spotify key to react
      spotify.setAccessToken(_token);
      // fetch information from spotify account
      spotify.getMe().then(user => {
        // pop into the datalayer
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type:"SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist('3dNTeAq6tgXXyeLyfvdI2P').then(response => 
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
    }
  }, [token, dispatch]);

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
