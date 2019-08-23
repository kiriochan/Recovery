import React from 'react'
import './style.scss'

export default (props)=>{
    return (
        <div className='page' id='not_find'>
            <img src='/images/404.png' alt=''/>
            <p>对不起，没有您要找的页面</p>
        </div>
    )
}