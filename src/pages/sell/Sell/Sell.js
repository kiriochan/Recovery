import React, {Component} from 'react';
import {connect} from 'react-redux';
import {test} from '../../../store/modules/sell'

class Sell extends Component {

    render(props) {

        return (
            <div>
                <h1 onClick={this.props.testClick}>卖手机</h1>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({

})


const mapDispatchToProps = (dispatch) => ({
    testClick() {

        let params = {
            timestamp:'1566467108',
            partner_id:'1001',
            Ip:'113.92.94.77',
            sign:'7e317fc3b2956a13b8031b6defe66eb0',
        };
        dispatch(test(params));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Sell);