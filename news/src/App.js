import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Headlines from './Views/Headlines';
import Sports from './Views/Sports';
import Science from './Views/Science';
import Technology from './Views/Technology';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <div>
         <br/>
            <Route exact path="/">
              <Headlines/>
            </Route>
          
          
            <Route path="/sports">
              <Sports/>
            </Route>
          
            <Route path="/science">
              <Science/>
            </Route>
          
            <Route path="/technology">
              <Technology/>
            </Route>
          
        </div>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
