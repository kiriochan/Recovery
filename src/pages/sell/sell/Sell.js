import React, {Component} from 'react';
import {connect} from 'react-redux';

import AppScroll from '../../../components/app-scroll/app-scroll';

import {requestData} from '../../../store/modules/sell'
import TabBar from '../../../components/tab-bar/tab-bar'
import Banner from './children/sell-banner/sell-banner';
import SellRecommend from './children/sell-recommend/sell-recommend';
import SellHeader from './children/sell-header/sell-header';
import SellFree from './children/sell-free/sell-free';
import SellHot from './children/sell-hot/sell-hot';
import './style.scss';

class Sell extends Component {
    render(props) {
        let {homeData} = this.props;
        console.log('homeData',homeData);
        return (
            <div id='sell'>
                <SellHeader></SellHeader>
                <AppScroll className='content'>
                    <Banner data={homeData.banner}/>
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
