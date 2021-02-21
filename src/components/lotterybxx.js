import React from "react"; 
import ReactDOM from 'react-dom';
import "./../style.scss"

class Lotterybx extends React.Component { 
    render() { 
        return (
            <div className="lottery-bx">
                <div className="blue-bx">
                    <div className="header">
                        <div className="headerbtm">
                            <img src="images/lottery_img.png"></img>
                            <div>
                                <h5>TICKET PRICE</h5>
                                324 <b>POWER</b>
                            </div>
                        </div>
                        <div className="headerbtm">
                            <img src="images/lottery_img.png"></img>
                            <div>
                                <h5>TOTAL POT</h5>
                                23,233,234 <b>POWER</b>
                            </div>
                        </div>

                    </div>
                    
                    <div className="timer">
                        <div>
                            1 <span>D</span>
                        </div>   
                        <div>
                            5 <span>H</span>
                        </div>   
                        <div>
                            24 <span>M</span>
                        </div>   
                        <div>
                            55 <span>S</span>
                        </div>               
                    </div>

                    <div className="bottom">
                        <div className="info">
                            TOTAL TICKETS: <b>14</b> 
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="info">
                                YOUR TICKETS: <b>14</b> 
                            </div>
                            <div className="info">
                               WIN CHANCE: <b>14</b> 
                            </div>
                        </div>
                        <div className="ip-outer">
                            <input className="form-control" placeholder="0.00"></input>
                            <div className="ip-tex">POWER <img src="images/sparkg.png"></img></div>
                        </div>

                        <a className="btn-main">BUY TICKETS</a>
                    </div>
                </div>
            </div>
        ); 
    } 
} 

export default Lotterybx;
