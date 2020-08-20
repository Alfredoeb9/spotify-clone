// The initial state of the datalayer app

export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null
};

// reducer just listens to actions
// State = the state of app
const reducer = (state, action) => {
  console.log(action);

  switch(action.type) {
    case 'SET_USER':
      return {
        // new state will look like
        // keep whatever is in the current state but update user slice w/action.user
        // ACTION -> type, [payload]
        ...state,
        user: action.user
      };
      // return normal state if nothing happens
      default: 
      return state;
  }
};

export default reducer;