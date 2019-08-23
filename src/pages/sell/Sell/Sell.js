import React, {Component} from 'react';
import {connect} from 'react-redux';
import {test} from '../../../store/modules/sell'
import AppScroll from '../../../components/app-scroll/app-scroll';
import TabBar from '../../../components/tab-bar/tab-bar'
import SellHeader from '../children/sell-header/sell-header';
import Banner from '../children/sell-banner/sell-banner';
import SellFree from '../children/sell-free/sell-free';
import SellHot from '../children/sell-hot/sell-hot';
import './style.scss';

class Sell extends Component {
    render(props) {
        return (
            <div id='sell'>
                <SellHeader></SellHeader>
                <AppScroll className='content'>
                    <Banner/>
                    <SellFree/>
                    <SellHot/>
                    <p onClick={this.props.testClick}>卖手机</p>
                    
                </AppScroll>
                
                <TabBar/>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({})


const mapDispatchToProps = (dispatch) => ({
    testClick() {
        dispatch(test());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Sell);
