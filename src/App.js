import './App.css';
import {useState} from 'react'
import MovieList from './components/MovieList';

import Navigation from './components/Navigation';
import Home from './components/Trailer';
import {BrowserRouter,Switch,Route,} from "react-router-dom";
import Trailer from './components/Trailer';
import Notfound from './components/Notfound';
import { Contact } from './components/Contact';


function App() {
  

  return (
    <BrowserRouter>
    <div className="App">
      
      <header className="App-header">
      
        <h1>Movie App</h1>
        <Navigation/>
        
      
     
      <Switch>

        <Route exact path="/"><h1>ythis is hoùme</h1></Route>
        <Route  path='/movies'  component={MovieList}/> 
        <Route  path='/Contact'  component={Contact}/> 
        <Route path='/trailer' component={Trailer}/>  
        <Route path='*' component={Notfound}/> 
        
      </Switch>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
