// The initial state of the datalayer app

export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  item: null,
  // token: 'BQCSCd7nVPUiig_pnWg-GMNQJ1PreUuEz-IjYk2OuGFluBTfp-Lj2EnJ6E5LpiCoMU8OVP648GgvJaFTMZ3hh0rvEjMhfWdF91TH_Enub84xy5553nyZmDQBGNwQ98BG-lJ3CEfxiILz-k768cWuav8b0c1_-mM1nB9JtF74DBx15qXY'
};

// reducer just listens to actions
// State = the state of app
const reducer = (state, action) => {
  

  switch(action.type) {
    // throw user into data layer
    case 'SET_USER':
      // new state will look like
      return {
        // keep whatever is in the current state but update user slice w/action.user
        // ACTION -> type, [payload]
        ...state,
        // pushed into the sate
        user: action.user
      };
      // whenever you receive a set token event
      case 'SET_TOKEN':
        return {
          // keep what ever is in the current state but
          // ADD TOKEN -> pushed into the state
          ...state,
          token: action.token,
        };

        case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

      case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

      case "SET_PLAYLISTS":
        return {
          // keep what the state is
          // update it was the user playlists
          ...state,
          playlists: action.playlists,
        };

        case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

        case "SET_DISCOVER_WEEKLY":
          return {
            ...state,
            discover_weekly: action.discover_weekly,
          };
      // return normal state if nothing happens
      default: 
        return state;
  }
};

export default reducer;