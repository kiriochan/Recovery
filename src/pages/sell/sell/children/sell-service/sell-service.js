import React, { Component } from 'react';
import './style.scss';

class SellCooperate extends Component {
    render() {
        let data = [
            {pic: '/images/md_03.jpg', id: 1,title:'订单查询',explain:'公众号查询进度'},
            {pic: '/images/md_06.jpg', id: 2,title:'保修查询',explain:'苹果华为保修查询'},
            {pic: '/images/md_10.jpg', id: 3,title:'IMEI查询',explain:'查一查更放心'},
            {pic: '/images/md_12.jpg', id: 4,title:'苹果ID查询',explain:'苹果ID案例查询'},
            {pic: '/images/md_15.jpg', id: 5,title:'人工服务',explain:'9点-21点在线'},
            {pic: '/images/md_18.jpg', id: 6,title:'商务合作',explain:'合作洽谈'},
            {pic: '/images/md_21.jpg', id: 7,title:'常见问题',explain:'交易细则'},
            {pic: '/images/md_25.jpg', id: 8,title:'服务条款',explain:'关于交易服务说明'}
        ]
        return (
            <div className='sell-subassembly'>
                <div className='service-title'>
                    <p>自助服务</p>
                </div>
                <div className='service-content'>
                    <ul className='service-list'>
                        {
                            data.map((item)=>(
                                <li className='service-item' key={item.id}>
                                    <div className='item-left'>
                                        <img src={item.pic} alt=""/>
                                    </div>
                                    <div className='item-text'>
                                        <p>{item.title}</p>
                                        <span>{item.explain}</span>
                                    </div>
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