// https://developer.spotify.com/documentation/wep-playback-sdk/quick-start/#

export const authEndpoint = 'https://accounts.spotify.com/authorize';

const redirectUri = 'http://localhost:3000/';
const clientId = 'aacbe5dd08824726b4f7a7cc8b99359b';

// Letting the user do these changes in the app
const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];

// Get acces token from URL
export const getTokenFromUrl = () => {
  return window.location.hash
  // split the URL before the & 
    .substring(1)
    .split('&')
    // pull the access token
    .reduce((initial, item) => {
      let parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;