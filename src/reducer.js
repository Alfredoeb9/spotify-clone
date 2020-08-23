// The initial state of the datalayer app

export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: 'BQCSCd7nVPUiig_pnWg-GMNQJ1PreUuEz-IjYk2OuGFluBTfp-Lj2EnJ6E5LpiCoMU8OVP648GgvJaFTMZ3hh0rvEjMhfWdF91TH_Enub84xy5553nyZmDQBGNwQ98BG-lJ3CEfxiILz-k768cWuav8b0c1_-mM1nB9JtF74DBx15qXY'
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

      case "SET_TOKEN":
        return {
          // keep what the state is
          // update it was the user playlists
          ...state,
          token: action.token,
        };
      // return normal state if nothing happens
      default: 
        return state;
  }
};

export default reducer;