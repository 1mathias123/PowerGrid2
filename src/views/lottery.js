import React from "react"; 
import ReactDOM from 'react-dom';
import "./../style.scss";
import Lotterybx from "./../components/lotterybxx"
class Lottery extends React.Component { 
    render() { 
        return (
            <div className="Lottery">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <Lotterybx/>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <Lotterybx/>
                    </div>
                </div>

                <div className={`ltry_bx_main lottery-bx`}>
                <img src="images/lottery_gift.png" className="main"></img>
                    <div className="blue-bx">
                       
                        <div className="d-flex justify-content-between header">
                            <div className="headerbtm">
                                <div>
                                    <h5>TICKET PRICE</h5>
                                    23,233,234 <b>POWER</b>
                                </div>
                            </div>
                            <div className="headerbtm">
                                <div>
                                    <h5>TOTAL POT</h5>
                                    23,233,234 <b>POWER</b>
                                </div>
                            </div>
                        </div>

                        <div className="bal">
                            <div>BALANCE</div>
                        </div>

                        <div className="d-flex justify-content-between header">
                            <div className="headerbtm">
                                <div>
                                    342.1 <b>BNB</b>
                                </div>
                            </div>
                            <div className="headerbtm">
                                <div>
                                   1,342.1 <b>POWER</b>
                                </div>
                            </div>
                        </div>

                        <div className="btn-outer">
                            <a className="btn-main">CLAIM 342.1 <span>BNB</span></a>
                            <a className="btn-main btn-main-yellow">CLAIM 342.1  <span>POWER</span></a>

                        </div>
                        
                    </div>
                    

                </div>



            


            </div>
        ); 
    } 
} 

export default Lottery;
