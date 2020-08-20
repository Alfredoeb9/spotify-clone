import React, 
{ createContext, useContext, useReducer }
from 'react';

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value ={useReducer(reducer, initialState)}>
  {/* children = App */}
  {/* reducer = listen for the user, listen for the event */}
    {children}
  </StateContext.Provider>
);

// Access information from StateContext.provider

export const useStateValue = () => useContext(StateContext);