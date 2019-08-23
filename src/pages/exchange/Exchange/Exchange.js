import React, {Component} from 'react';
import {connect} from 'react-redux';
import TabBar from '../../../components/tab-bar/tab-bar'
import './style.scss';
import {test} from "../../../store/modules/exchange";


class Exchange extends Component {

    render() {
        return (
            <div>
                <h1 onClick={this.props.testClick}>换新机</h1>


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

export default connect(mapStateToProps, mapDispatchToProps)(Exchange);