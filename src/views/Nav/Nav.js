import React from "react";
import './Nav.scss';
import {
    BrowserRouter,
    Switch,
    Route,
    Link, NavLink
  } from "react-router-dom";

class Nav extends React.Component{
    render() {
        return (
            <>
            
            <div className="topnav">
                <a className="active" href="/">Home</a>
                <a href="/todo">Todos</a>
                <a href="/listUsers">Users</a>
                
            </div>

            <div>Hello world React</div>
            </>
        )
    }
}
export default Nav