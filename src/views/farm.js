import React from "react"; 
import ReactDOM from 'react-dom';
import "./../style.scss";
import Farmbx from "./../components/farmbx"
class Farm extends React.Component { 
    constructor ( props ) {
        super( props );
		
		this.state = {
			isChecked: true
		}
    }
	
	componentWillMount () {
		this.setState( { isChecked: this.props.isChecked } );
	}
    render() { 
        return (
            <div className="Farm">
                <div className="farm_headinng">
                    <h5>Stake LP token to earn POWER</h5>
                    <div className="headingimg">
                        <img src="images/farm1.png"></img>
                        <div className="switch-container">
                            <label>
                                <input ref="switch" checked={ this.state.isChecked } onChange={() => this.setState({isChecked :!this.state.isChecked}) } className="switch" type="checkbox" />
                                <div>
                                    <div></div>
                                </div>
                            </label>
                            <div className="text">{this.state.isChecked == true? "Staked Only" : " Not Staked"}</div>
                        </div>
                        
                        <div class="tab-slider--nav">
                            <ul class="tab-slider--tabs">
                                <li class="tab-slider--trigger active" rel="tab1">Active</li>
                                <li class="tab-slider--trigger" rel="tab2">Inactive</li>
                            </ul>
                        </div>

                        <img src="images/farm2.png"></img>

                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Farmbx/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Farmbx/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Farmbx/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Farmbx/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Farmbx/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Farmbx/>
                    </div>
           
                </div>

                

            


            </div>
        ); 
        
    } 
} 

export default Farm;
