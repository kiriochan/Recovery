import React, { Component } from 'react';
import './style.scss'

class HotSearch extends Component {
    render() {
        return (
            <div className='hot-search'>
            <div className='content'>
                <div className='header'>
                    <div className='search'>
                        <i className='iconfont iconfangdajing'></i>
                        <input className='btn' type="text" placeholder='请输入搜索关键词'/>
                    </div>
                    <div className='goback'>
                        <p onClick={()=>{
                            this.props.history.goBack()
                            }}>
                            取消
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
        );
    }
}

export default HotSearch;