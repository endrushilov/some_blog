import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Menu extends Component {
    render() {  
        return ( 
        	<ul className="page-nav">  
        	 	<li className="page-nav-item">
 					<Link to={'/'}>Home</Link>
 				</li>
 				<li className="page-nav-item">
 					<Link to={'/about'}>About</Link>
 				</li>
 				<li className="page-nav-item">
 					<Link to={'/contacts'}>Contacts</Link>
 				</li>
        	</ul>
        );
  }
}

export default Menu;