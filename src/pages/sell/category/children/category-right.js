import React from 'react';
import AppScroll from '../../../../components/app-scroll/app-scroll';

const CategoryRight = (props) => {
    let {data} = props;
    console.log('CategoryRight', data);
    let rightDOM = (
        <div className={'right-list-wrap'}>
            <ul className={'list-ul'}>
                {
                    data && data.map(item => (
                        <li className={'list-li'} key={item.goodsId}>
                            <img className={'li-img'} src={item.originalImg}/>
                            <div className={'li-div'}>
                                <p className={'li-div-title'}>{item.goodsName}</p>
                                <p className={'li-div-p'}>回收均价：
                                    <span className={'li-div-span'}>{item.shopPrice}</span>
                                </p>
                            </div>

                        </li>
                    ))
                }
            </ul>
        </div>
    )
    return (
        <AppScroll className='content-right'>
            {rightDOM}
        </AppScroll>
    )
}

export default CategoryRight;