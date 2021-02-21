import React from "react"; 
import ReactDOM from 'react-dom';
import "./../style.scss"
class Navbar extends React.Component { 
    render() { 
        return (
            <nav>
                <img src="/images/logo.png" className="nav-logo"></img>
                <a className="btn-main">Connect</a>
            </nav>
        ); 
    } 
} 

export default Navbar;
