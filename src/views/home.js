import React from "react"; 
import ReactDOM from 'react-dom';
import "./../style.scss";
class Home extends React.Component { 
    render() { 
        return (
            <div className="Home">
                <div className="head">
                    <img src="images/homel2.png"></img>
                    <div>
                        <h2>Power Grid</h2>
                        The #1 Dapp of the Unipower network
                    </div>
                    <img src="images/homel1.png"></img>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="blue-bx blue-bx-lg">
                            <h3>Liquidity Farming</h3>
                            <img src="images/liquidity.png"></img>
                            <div className="info">
                                <h3>3,490.49</h3>
                                POWER to Harvest
                            </div>

                            <div className="info">
                                <h5>43,321.22</h5>
                                POWER to Wallet
                            </div>
                            <a className="btn-main">Claim Dividends</a>
                            <img src="images/liq-back.png" className="back"></img>

                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12">
                        <div className="blue-bx blue-bx-lg">
                            <h3>Your Lottery Winnings</h3>
                            <img src="images/lottery.png"></img>
                            <div className="info">
                                <h3>9,999.99</h3>
                                Winnings to Collect
                            </div>

                            <div className="info">
                                <h5>335</h5>
                                Tickets bought this round
                            </div>
                            <a className="btn-main">Collect Winnings</a>
                            <img src="images/lottery-back.png" className="back"></img>

                        </div>
                    </div>

                </div>



                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <div className="blue-bx blue-bx-sm">
                            Earn up to <br/>
                            <h2>1,322% APY</h2>
                            In Farms
                            <i class="fas fa-arrow-right"></i>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <div className="blue-bx blue-bx-power">
                            <div className="blue">EARN</div>
                            <div className="black">POWER</div>
                            <div className="blue">By adding liquidity</div>
                            <i class="fas fa-arrow-right"></i>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <div className="blue-bx blue-bx-sm">
                            Lottery with <br/>
                            <h2>1,322% APY</h2>
                            up for grabs
                            <i class="fas fa-arrow-right"></i>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="blue-bx blue-bx-stats">
                            <h2>Stats</h2>
                            <div className="drow">
                                <div>Total POWER Supply</div>
                                <b>1,221,223,234</b>
                            </div>
                            <div className="drow">
                                <div>Total Farming Power</div>
                                <b>44,234</b>
                            </div>
                            <div className="drow">
                                <div>GridPower / Day</div>
                                <b>34</b>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12">
                        <div className="blue-bx blue-bx-sm">
                            Total Value Locked (TVL)<br/>
                            <h2>$1,233,443,333</h2>
                            <small>Across every Pools.</small>

                        </div>
                    </div>

                </div>


            </div>
        ); 
    } 
} 

export default Home;
