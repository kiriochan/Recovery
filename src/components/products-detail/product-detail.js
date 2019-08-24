import React, { Component } from 'react';
import AppScroll from '../app-scroll/app-scroll'
import './style.scss'

class ProductDetail extends Component {
    render() {
        return (
            <div className="product-detail">
            {/* 头部 */}
                <div className="header">
                    <div>
                        <span className="iconfont iconico_leftarrow"></span>
                        <span className="inconfont iconshouye"></span>
                    </div>
                    <h1>12312435634</h1>
                </div>
            </div>
        );
    }
}

export default ProductDetail;