import React, { Component } from "react";
import './style.scss';

export default class Banner extends Component {
  swiperDOM = React.createRef();
  render() {
    let { data } = this.props;
    return (
        
      <div className="swiper-container" ref={this.swiperDOM}>
        <div className="swiper-wrapper">
            {
                data && data.products.map((item) => (
                    <div className="swiper-slide" key={item.goodsId}>
                        <div className='banner-left'>
                            <img src={item.originalImg} alt=""/>
                            <p className='phone-name'>{item.goodsName}</p>
                            <p className='phone-price'>
                                回收均价
                                <span>￥{item.shopPrice}</span>
                            </p>
                        </div>
                        <div className='banner-right'>
                            <div className='box-left'>
                                <div className='box-img'>
                                    <img src="/images/box1.png" alt=""/>
                                </div>
                                
                                <p>信用回收</p>
                                <p>
                                    先预付
                                    <span>￥1500</span>
                                </p>
                            </div>
                            <div className='box-center'>
                                <div className='box-img'>
                                    <img src="/images/sf.png" alt=""/>
                                </div>
                                
                                <p>邮寄回收</p>
                                <p>
                                    回收价
                                    <span>￥{item.shopPrice+150}</span>
                                </p>
                            </div>
                            <div className='box-right'>
                                <div className='box-img'>
                                    <img src="/images/house.png" alt=""/>
                                </div>
                            
                                <p>上门回收</p>
                                <p>
                                    回收价
                                    <span>￥{item.shopPrice}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
      </div>
    );
  }

  componentDidMount(){
    // 初始化轮播图
    this.swiper = new window.Swiper(this.swiperDOM.current, {
        autoplay : 3000,
        speed:300,
        loop: true
    });
  }
  componentDidUpdate(){
    // 数据发生变化，先销毁，再重新创建轮播图
    this.swiper.destroy();
    this.swiper = new window.Swiper(this.swiperDOM.current, {
        autoplay : 3000,
        speed:300,
        loop: true
    });
  }
}
