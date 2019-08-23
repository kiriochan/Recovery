import React from 'react';
import './style.scss'

const Loading = (props)=>{
    return (
        <div className='page' id='loading'>
            <img src="https://i.52112.com/icon/jpg/256/20190121/28519/1413225.jpg" alt=''/>
            <p>正在加载中...</p>
        </div>
    )
}

export default Loading;