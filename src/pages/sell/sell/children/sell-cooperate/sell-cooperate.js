import React, { Component } from 'react';
import './style.scss';

class SellCooperate extends Component {
    render() {
        let data = [
            {pic: '/images/log1_01.jpg', id: 1},
            {pic: '/images/log1_02.jpg', id: 2},
            {pic: '/images/log1_03.jpg', id: 3},
            {pic: '/images/log1_04.jpg', id: 4},
            {pic: '/images/log1_05.jpg', id: 5},
            {pic: '/images/log1_06.jpg', id: 6}
        ]
        return (
            <div className='sell-subassembly'>
                <div className='cooperate-title'>
                    <p>合作品牌</p>
                </div>
                <div className='cooperate-content'>
                    <ul className='cooperate-list'>
                        {
                            data.map((item)=>(
                                <li className='cooperate-item' key={item.id}>
                                    <img src={item.pic} alt=""/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default SellCooperate;