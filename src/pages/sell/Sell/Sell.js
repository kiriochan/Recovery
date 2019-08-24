import React, {Component} from 'react';
import {connect} from 'react-redux';

import AppScroll from '../../../components/app-scroll/app-scroll';

import {requestData} from '../../../store/modules/sell'
import TabBar from '../../../components/tab-bar/tab-bar'
import SellHeader from '../children/sell-header/sell-header';
import Banner from '../../../components/app-banner/app-banner';
import SellFree from '../children/sell-free/sell-free';
import SellHot from '../children/sell-hot/sell-hot';
import SellRecommend from '../children/sell-recommend/sell-recommend';
import './style.scss';

class Sell extends Component {
    render(props) {
        let {homeData} = this.props;
        return (
            <div id='sell'>
                <SellHeader></SellHeader>
                <AppScroll className='content'>
                    <Banner/>
                    <SellFree/>
                    <SellHot/>
                    <SellRecommend/>
                    <p onClick={this.props.testClick}>卖手机</p>
                    
                </AppScroll>
                
                <TabBar/>
            </div>
        )
    }
    componentDidMount(){
        this.props.initData();  
    }
}







const mapStateToProps = (state) => ({
    homeData: state.sell.homeData,
})


const mapDispatchToProps = (dispatch) => ({
    initData() {
        dispatch(requestData());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Sell);
