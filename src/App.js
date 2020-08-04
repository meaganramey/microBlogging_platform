import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Navigation } from "./components";
import configureStore from "./redux/configureStore";
import './App.css'

const { store, persistor } = configureStore();

const KWITTER = {
  store,
  persistor,
};

window.KWITTER = KWITTER;

export const App = () => (
  <div className="App">
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Navigation />
    </PersistGate>
  </Provider>
  </div>
);
    
//   getUser = () => {
//     fetch("https://kwitter-api.herokuapp.com/users")
//       .then((response) => response.json())
//         .then((response) => {
//           const user = response.users[0]
//           console.log(user)     
//         })       
//   }   



  
  


