import logo from './logo.svg';
import './App.scss';
import ListToDo from './TodosApp/ListToDo';
import Nav from './Nav/Nav';
import { ToastContainer, toast } from 'react-toastify';
import Home from './example/Home';
import ListUsers from './Users/ListUsers';
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Switch,
  Route, NavLink,
  Link
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <header className="App-header">
      <Nav/>
        <img src={logo} className="App-logo" alt="logo" />
       
        
        
        <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListToDo />
            </Route>
            <Route path="/listUsers">
              <ListUsers />
            </Route>
          </Switch>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
