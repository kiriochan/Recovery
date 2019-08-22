import React from 'react'
import {NavLink} from 'react-router-dom'
import './style.scss'

export default (props)=>{

    return (
        <nav className="tab-bar border-top">
            <NavLink className="tab-item" key="1" to='/sell'>
                <span className="iconfont">&#xe944;</span>
                <span>卖手机</span>
            </NavLink>
            <NavLink className="tab-item" key="2" to='/exchange'>
                <span className="iconfont">&#xe6c7;</span>
                <span>换新机</span>
            </NavLink>
            <NavLink className="tab-item" key="3" to='/mine'>
                <span className="iconfont">&#xe612;</span>
                <span>我的</span>
            </NavLink>
            
        </nav>
    )
}