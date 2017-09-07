import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'

const Header = () => (
  <div className="Header">
    <NavLink exact to="/" activeClassName="Link-selected">
      Home
    </NavLink>
    <NavLink to="/about" activeClassName="Link-selected">
      About Us
    </NavLink>
    <NavLink to="/sign-up" activeClassName="Link-selected">
      Sign Up
    </NavLink>
    <NavLink to="/sign-in" activeClassName="Link-selected">
      Sign In
    </NavLink>
  </div>
)

export default Header
