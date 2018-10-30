import React from 'react'
import './Header.css'

const Header = props => (
  <nav className='headerContainer navbar navbar-expand-lg'>
    <ul>
      <li>{props.title}</li>
      <li>{props.rightWrong}</li>
      <li>Current Score: {props.score}</li>
    </ul>
  </nav>
);

export default Header
