import React, { Component } from 'react';
import './style.scss';

class SellHot extends Component {
    render() {
        return (
            <div className='sell-subassembly'>
                <div className='title'>
                    <img src="/images/hotsell.png" alt=""/>
                    <span>
                        限时高价
                        <i>00</i>
                         天
                        <i>00</i>
                         时 
                        <i>00</i>
                         分 
                        <i>00</i>
                         秒   
                    </span>
                </div>
            </div>
        );
    }
}

export default SellHot;