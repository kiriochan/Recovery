import React, { Component } from 'react';
import Banner from './children/hot-banner/hot-banner';
import './style.scss';

class SellHot extends Component {
    render() {
        return (
            <div className='sell-subassembly'>
                <div className='hot-title'>
                    <img src="/images/hotsell.png" alt=""/>
                    <span>
                        限时高价
                        <b>00</b>
                         天
                        <b>00</b>
                         时 
                        <b>00</b>
                         分 
                        <b>00</b>
                         秒   
                    </span>
                </div>
                <Banner/>
            </div>
        );
    }
}

export default SellHot;