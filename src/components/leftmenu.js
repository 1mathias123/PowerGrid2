import React from "react"; 
import ReactDOM from 'react-dom';
import "./../style.scss"
import {BrowserRouter as Router,Link } from "react-router-dom";
class Leftmenu extends React.Component { 
    constructor ( props ) {
        super( props );
		
		this.state = {
			isOpen: false,
            moreOpen:false
		}
    }
    render() { 
        return (
                <div className={this.state.isOpen == false ?"left-menu" : "left-menu menu-open"}>
                    <div className="hamburgr" onClick={() => this.setState({isOpen :!this.state.isOpen}) }><i class="fas fa-bars"></i></div>
                    <div className="left-top">
                        <Link className="nav-link" activeClassName='active' to="/"><img src="images/icons/ic1.png"></img>Home</Link>
                        <Link className="nav-link" activeClassName='active' to="/farm"><img src="images/icons/ic2.png"></img> Farms</Link>
                        <Link className="nav-link" activeClassName='active' to="/lottery"><img src="images/icons/ic3.png"></img>Lottery</Link>
                        <div >
                            <div className="nav-link nav_more_ic" onClick={() => this.setState({moreOpen :!this.state.moreOpen}) }><img src="images/icons/ic4.png"></img>More</div>
                            <div className={this.state.moreOpen == false ?"more_nav" : "more_nav more_nav_open"}>
                                <a  className="nav-link">Voting</a>
                                <a  className="nav-link">Github</a>
                                <a  className="nav-link">Docs</a>
                                <a  className="nav-link">Blog</a>
                            </div>

                        </div>
                    </div>
                    <div className="left-bottom">
                        <img src="images/icons/tele.png"></img>
                        <img src="images/icons/gecko.png"></img>
                        <img src="images/icons/twitter.png"></img>
                        <img src="images/icons/cmc.png"></img>
                    </div>
                </div>
        ); 
    } 
} 

export default Leftmenu;
