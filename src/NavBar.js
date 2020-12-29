import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import deliveritlogo from "./translogo.png"
class NavBar extends Component {
    render(){
        return(
            <nav className="navBar">
             
                <ul>
                 
                <img style={{paddingRight:20,paddingTop:5}} src={deliveritlogo} width={35} height={40}/>
              
                    <li><NavLink exact to="/deliverit">Home</NavLink></li>
                    <li><NavLink to="/about/">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/possiblepartners/">Possible Partners</NavLink></li>
                    <li><NavLink to="/signup/">Register</NavLink></li>
                </ul>
            </nav>
        );
    }
}
export default NavBar;