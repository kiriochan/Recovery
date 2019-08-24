import React, { Component } from 'react';
import Banner from './children/highlight-banner/highlight-banner';
import './style.scss';

class SellHighlight extends Component {
    render() {
        return (
            <div className='sell-subassembly'>
                <div className='highlight-title border-bottom'>
                    <img src="/images/kandian.png" alt=""/>
                    <div className="swiper-pagination"/>
                </div>
                <Banner/>
            </div>
        );
    }
}

export default SellHighlight;