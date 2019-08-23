import React from 'react';
import './style.scss';

export default (props)=>{
    return (
        <div className='hot-search'>
            <div className='header'>
                <div className='search'>
                    <i className='iconfont iconfangdajing'></i>
                    <input type="text" placeholder='请输入搜索关键词'/>
                </div>
                <div className='goback'>
                    <p>取消</p>
                </div>
            </div>
        </div>
    )
}