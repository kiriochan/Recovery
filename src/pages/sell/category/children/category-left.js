import React from 'react';
import AppScroll from '../../../../components/app-scroll/app-scroll';

const CategoryLeft = (props) => {
    let {data} = props;
    let leftDOM = (
        <div className={'left-list-wrap'}>
            <ul className={'list-ul'}>
                {
                    data && data.map(item=>(
                        <li className={'list-li'} key={item.id}>
                            <img className={'li-img'} src={item.logo}/>
                            <p className={'li-text'}>{item.name}</p>
                        </li>

                    ))
                }
            </ul>
        </div>
    )
    return (
        <AppScroll className='content-left'>
            {leftDOM}
        </AppScroll>
    )
}

export default CategoryLeft;