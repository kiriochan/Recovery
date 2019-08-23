import React, {Component} from 'react';
import TabBar from '../../../components/tab-bar/tab-bar';
import SellHeader from '../children/sell-header';
import './style.scss';



export default class Sell extends Component {


    render(){
        return (
            <div id='sell'>
                <SellHeader></SellHeader>

               
                <h1 onClick={this.hAction.bind(this)}>卖手机</h1>



                                
                <TabBar />

            </div>
        )
    }
    hAction(){
        console.log(this.props);
        
    }

}