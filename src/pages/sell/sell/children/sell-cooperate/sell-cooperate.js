import React, { Component } from 'react';
import './style.scss';

class SellCooperate extends Component {
    render() {
        return (
            <div className='sell-subassembly'>
                <div className='cooperate-title'>
                    <p>合作品牌</p>
                </div>
                <div className='cooperate-content'>
                    <ul className='cooperate-list'>
                        <li className='cooperate-item'>
                            <img src="/images/banner.jpg" alt=""/>
                        </li>
                        <li className='cooperate-item'>
                            <img src="/images/banner.jpg" alt=""/>
                        </li>
                        <li className='cooperate-item'>
                            <img src="/images/banner.jpg" alt=""/>
                        </li>
                        <li className='cooperate-item'>
                            <img src="/images/banner.jpg" alt=""/>
                        </li>
                        <li className='cooperate-item'>
                            <img src="/images/banner.jpg" alt=""/>
                        </li>
                        <li className='cooperate-item'>
                            <img src="/images/banner.jpg" alt=""/>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SellCooperate;