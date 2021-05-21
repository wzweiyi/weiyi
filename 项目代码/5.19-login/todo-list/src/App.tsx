// import React,{useState} from 'react';

// import Header from './components/Header'
// import List from './components/List'
import RouterView from "./router/RouterView"
import routerConfig from "./router/routerConfig"
import "./App.css"
const App=()=>{

  
  return <div id="App">
   <RouterView routes={routerConfig}></RouterView>
  </div>
}

export default App;
