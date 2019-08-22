import React from 'react';
import './style.scss';

export default (props)=>{
    const {left, right, title, leftClick, rightClick} = props;
    return (
        <header className="app-header border-bottom">
            {left && <div className="header-btn header-left-btn" onClick={leftClick}>{left}</div>}
            <h1 className="title">{title}</h1>
            {right && <div className="header-btn header-right-btn" onClick={rightClick}>{right}</div>}
        </header>
    )
}