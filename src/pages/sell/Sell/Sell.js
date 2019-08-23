import React, {Component} from 'react';
import {connect} from 'react-redux';
import {requestData} from '../../../store/modules/sell'
import TabBar from '../../../components/tab-bar/tab-bar'
import SellHeader from '../children/sell-header';
import './style.scss';

class Sell extends Component {

    render(props) {
        let {homeData} = this.props;
        return (
            <div id='sell'>
                <SellHeader></SellHeader>
                <h1>卖手机</h1>
                <TabBar/>
            </div>
        )
    }

    componentDidMount() {
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