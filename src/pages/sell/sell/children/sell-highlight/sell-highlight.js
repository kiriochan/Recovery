import React, { Component } from 'react';
import Banner from './children/highlight-banner/highlight-banner';
import './style.scss';

class SellHighlight extends Component {
    
    render() {
        let {data} = this.props;
        return (
            <div className='sell-subassembly'>
                <div className='highlight-title border-bottom'>
                    <img src="/images/kandian.png" alt=""/>
                    <div className="swiper-pagination"/>
                </div>
                <Banner data={data}/>
            </div>
        );
    }
}

export default SellHighlight;