import React, { Component } from 'react';
import Header from '../../../../../components/app-header/app-header';
import AppScroll from '../../../../../components/app-scroll/app-scroll';
import './style.scss';

class SelectCity extends Component {
    render() {
        return (
            <div className='select-city'>
                <Header title='选择城市' left={
                    <span className="iconfont iconico_leftarrow"></span>
                } leftClick={this.backAction}/>
                
                <AppScroll className='city-content'>
                    <ul className='list'>
                        <p className='list-title'>A</p>
                        <li className='item border-bottom'>北京市</li>
                        <li className='item border-bottom'>上海市</li>
                        <li className='item border-bottom'>深圳市</li>
                        <li className='item border-bottom'>广州市</li>
                        <li className='item border-bottom'>武汉市</li>
                    </ul>
                    <ul className='list'>
                        <p className='list-title'>A</p>
                        <li className='item border-bottom'>北京市</li>
                        <li className='item border-bottom'>上海市</li>
                        <li className='item border-bottom'>深圳市</li>
                        <li className='item border-bottom'>广州市</li>
                        <li className='item border-bottom'>武汉市</li>
                    </ul>
                    <ul className='list'>
                        <p className='list-title'>A</p>
                        <li className='item border-bottom'>北京市</li>
                        <li className='item border-bottom'>上海市</li>
                        <li className='item border-bottom'>深圳市</li>
                        <li className='item border-bottom'>广州市</li>
                        <li className='item border-bottom'>武汉市</li>
                    </ul>
                    <ul className='list'>
                        <p className='list-title'>A</p>
                        <li className='item border-bottom'>北京市</li>
                        <li className='item border-bottom'>上海市</li>
                        <li className='item border-bottom'>深圳市</li>
                        <li className='item border-bottom'>广州市</li>
                        <li className='item border-bottom'>武汉市</li>
                    </ul>
                    
                </AppScroll>
                
                
                
            </div>
        );
    }

    backAction = ()=>{
        this.props.history.goBack();
    }
}

export default SelectCity;