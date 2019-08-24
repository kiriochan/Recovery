import React, { Component } from 'react';
import AppHeader from '../app-header/app-header'
import AppScroll from '../app-scroll/app-scroll'
import {connect} from 'react-redux'

import './style.scss'
class More extends Component {
    
    render() {
        let {exchangeData} = this.props;
        console.log('more',exchangeData);
        let phoneData=exchangeData.products;
        let laptopData=exchangeData.laptop;
        
        return (
            <div className="product-more">
            <AppHeader title="产品列表" left={
                    <span className="iconfont iconico_leftarrow"></span>
                } leftClick={this.backAction}/>
                <AppScroll className="content">
                    <ul className="products-content">
                        {
                            phoneData&&phoneData.map((item)=>(
                                <li className="products-item" key={item.id} >
                                    <img src={item.img} alt=""/>
                                    <div className="products-text">
                                        <p className="products-title">{item.title}</p>
                                        <p className="products-price">新机价格<span>￥{item.price}</span></p>
                                    </div>
                                
                                    <p className="enjoy">享受环保补助</p>
                                    <p className="change-newphone">去换新</p>
                                    <p className="products-discount">-￥{item.bonus_price}</p>

                                </li>
                            ))
                        }
                    </ul>
                    <ul className="products-content">
                        {
                            laptopData&&laptopData.map((item)=>(
                                <li className="products-item" key={item.id} >
                                    <img src={item.img} alt=""/>
                                    <div className="products-text">
                                        <p className="products-title">{item.title}</p>
                                        <p className="products-price">新机价格<span>￥{item.price}</span></p>
                                    </div>
                                
                                    <p className="enjoy">享受环保补助</p>
                                    <p className="change-newphone">去换新</p>
                                    <p className="products-discount">-￥{item.bonus_price}</p>

                                </li>
                            ))
                        }
                    </ul>
                </AppScroll>
            </div>
           
        );
    }
    backAction = ()=>{
        this.props.history.goBack();
    }
}
const mapStateToProps=(state)=>({
    exchangeData:state.exchange.exchangeData
})
const mapDispatchToProps=(dispatch)=>({

})

export default connect(mapStateToProps,mapDispatchToProps)(More);