import React from 'react'
import { NavLink } from 'react-router-dom'

import './Header.css';

function Header() {
    return (
        <nav class="title">
            <h1 class=" p-3"> Jose's Computer Services</h1>
            <div class="nav">
                <NavLink
                    className="button nav-link"
                    activeClassName="nav-link-active"
                    exact
                    to="https://www.google.com/?client=safari">Services</NavLink>

                <NavLink
                    className="nav-link"
                    activeClassName="nav-link-active"
                    to="/about">About</NavLink>

            </div>
        </nav>
    )
}

export default Header
