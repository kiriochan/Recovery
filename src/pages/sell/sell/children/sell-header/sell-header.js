import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import './style.scss';

class SellSearch extends Component {
    render() {
        return (
            <div className='sell-header'>
                <div className='header-left' onClick={this.selectCityAction.bind(this)}>
                    <span>深圳</span>
                    <i className='iconfont iconjiantou9'></i>
                </div>
                <div className='header-search'>
                    <img src="/images/mine/userlogo.e273d4b7.png" alt=""/>
                    <input className='btn' type="text" placeholder='搜索你想查找的型号'
                    onClick={this.searchAction.bind(this)}
                    />
                    <i className='iconfont iconfangdajing'></i>
                </div>
                <div className='header-right'>
                    <i className='iconfont iconcaidan1'></i>
                    <p>企业回收</p>
                </div>
            </div>
        );
    }
    searchAction(){
        this.props.history.push('/sell/search');
    }
    selectCityAction(){
        this.props.history.push('/sell/selectCity');
    }
}

export default withRouter(SellSearch);