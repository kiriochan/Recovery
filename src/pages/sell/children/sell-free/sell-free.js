import React, { Component } from 'react';
import './style.scss';

class SellFree extends Component {
    render() {
        return (
            <div className='sell-subassembly'>
                <div className='title'>
                    <div className='left'>
                        <img src="/images/free.png" alt=""/>
                        <i className='iconfont iconwenhao'></i>
                    </div>
                    <div className='right'>
                        <i className='iconfont iconcaidan'></i>
                        <span>全部型号</span>
                    </div>
                </div>
                <div className='free-content'>
                    <ul className='list'>
                        <li className='item'>
                            <img src="images/phone.png" alt=""/>
                            <p>手机</p>
                        </li>
                        <li className='item'>
                            <img src="images/phone.png" alt=""/>
                            <p>手机</p>
                        </li>
                        <li className='item'>
                            <img src="images/phone.png" alt=""/>
                            <p>手机</p>
                        </li>
                        <li className='item'>
                            <img src="images/phone.png" alt=""/>
                            <p>手机</p>
                        </li>
                        <li className='item'>
                            <img src="images/phone.png" alt=""/>
                            <p>手机</p>
                        </li>
                    </ul>
                </div>
                <div className='btn'>
                    <p>估价下单</p>
                </div>
            </div>
        );
    }
}

export default SellFree;