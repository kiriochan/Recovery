import React, {Component} from 'react';
import {connect} from 'react-redux';
import {test} from '../../../store/modules/sell'
import TabBar from '../../../components/tab-bar/tab-bar'
import './style.scss';

class Sell extends Component {

    render(props) {

        return (
            <div>
                <h1 onClick={this.props.testClick}>卖手机</h1>
                <TabBar/>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({})


const mapDispatchToProps = (dispatch) => ({
    testClick() {

        dispatch(test(params));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Sell);