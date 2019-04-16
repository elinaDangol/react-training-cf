import React from 'react';
import { NavLink } from 'react-router-dom';
import Router from './router';

const Nav = () => (
    < ul className="nav nav-tabs" >
        <li className="nav-item">
            <NavLink className="nav-link " to="/" exact activeClassName="active">Active</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/controller">Link</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/heroes">Heroes</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/hooks">Hooks</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/super">Super</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/assignment">Assignment</NavLink>
        </li>
    </ul >
);

const Navbar = () => (
    <div className="main">
        <Nav />
        <div className="body">
            <Router />
        </div>
    </div>
)

export default Navbar;