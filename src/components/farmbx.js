import React from "react"; 
import ReactDOM from 'react-dom';
import "./../style.scss"

class Farmbx extends React.Component { 
    constructor ( props ) {
        super( props );
		
		this.state = {
			detailOpen: false
		}
    }
    render() { 
        return (
            <div className="farm-bx">
                <div className="blue-bx">
                    <div className="header">
                        <div className="coinouter">
                            <img src="images/coin1.png"></img>
                            <div>
                                <img src="images/coin1.png"></img>
                            </div>                        
                        </div>
                        <div className="info">
                            <h5>POWER-BNB LP</h5>
                            <div className="times">
                                <div className="core"><img src="images/spark.png"></img>Core</div>
                                <div className="time">40X</div>
                            </div>
                        </div>
                    </div>

                    <div className="apyearn">
                        <div className="d-flex justify-content-between">
                            Apy:
                            <b>124.73%</b>
                        </div>
                        <div className="d-flex justify-content-between">
                            Earn:
                            <b>POWER</b>
                        </div>
                    </div>

                    <div className="btnbtmouter">
                        <div className="btnbottom">
                            <h6>POWER EARNED</h6>
                            <div className="btns-outer">
                                <b>43,321.22</b>
                                <a className="btn-main">Harvest</a>
                            </div>
                        </div>
                        <div className="btnbottom">
                            <h6>POWER-BNB LP STAKED</h6>
                            <div className="btns-outer">
                                <b>0.009433</b>
                                <a className="btn-main">Withdraw</a>
                            </div>
                        </div>

                    </div>
                    
                    <div className="details_outer">
                        <b  onClick={() => this.setState({detailOpen :!this.state.detailOpen}) }>Details<i class="fas fa-angle-down"></i></b>
                        <div className={this.state.detailOpen == true ?"details-info" : "details-info details-open"}>
                            <div className="det-row">
                                23,234
                                <div>
                                    <input className="form-control"></input>
                                    <a className="btn-main">Staking</a>
                                </div>
                            </div>
                            <div className="det-row">
                                23,234
                                <div>
                                    <input className="form-control"></input>
                                    <a className="btn-main">Unstaking</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ); 
    } 
} 

export default Farmbx;
