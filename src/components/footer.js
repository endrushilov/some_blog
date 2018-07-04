import React, { Component } from 'react';
import logo from '../img/logo.png';
import Menu from './menu';


class Footer extends Component {
    render() {  
        return ( 
        	<footer className="footer">  
        		<img src={logo} className="logo"  alt="logo"/>
        		<Menu></Menu>
        	</footer>
        );
  }
}

export default Footer;