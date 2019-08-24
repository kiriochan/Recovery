import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import './style.scss';

class SellRecommend extends Component {
    render() {
        return (
            <div className='sell-subassembly'>
                <div className='recommend-title border-bottom'>
                    <img src="/images/recommend.png" alt=""/>
                </div>
                <div className='recommend-content'>
                    <div className='rec-left border-right' 
                    onClick={this.toExchangeAction.bind(this)} >
                        <h2>以旧换新</h2>
                        <p>官方授权 正品保障</p>
                        <span>立即参与</span>
                        <img src="/images/phone.jpg" alt=""/>
                    </div>
                    <div className='rec-right'>
                        <div className='right-top border-bottom'>
                            <div className='text'>
                                <h2>信用回收</h2>
                                <p>速回收合作芝麻信用 先得钱后回收</p>
                            </div>
                            <div className='img'>
                                <img src="/images/phone.jpg" alt=""/>
                            </div>
                            
                        </div>
                        <div className='right-bot'>
                            <div className='text'>
                                    <h2>信用回收</h2>
                                    <p>速回收合作芝麻信用 先得钱后回收</p>
                                </div>
                                <div className='img'>
                                    <img src="/images/phone.jpg" alt=""/>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        );
    }
    toExchangeAction(){
        this.props.history.push('/exchange');
    }
}

export default withRouter(SellRecommend);