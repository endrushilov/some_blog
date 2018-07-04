import React, { Component } from 'react';
import logo from '../img/logo.png';
import Menu from './menu';

class Header extends Component {
    render() {  
        return ( 
        	<div className="header">  
        		<img src={logo} className="logo"  alt="logo"/>
        		<Menu></Menu>
        	</div>
        );
  }
}

export default Header;