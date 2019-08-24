import React, { Component } from "react";
import './style.scss';

export default class Banner extends Component {
  swiperDOM = React.createRef();
  render() {
    let {data} = this.props;
    return (
      <div className="swiper-container" ref={this.swiperDOM}>
        <div className="swiper-wrapper">
            <div className="swiper-slide">
                <ul className='highlight-list'>
                    <li className='highlight-item'>
                        <div className='item-left'>
                            <img src="/images/banner.jpg" alt=""/>
                        </div>
                        <div className='item-text'> 
                            <p>速回收联合广西移动，手机回收以旧换新</p>
                            <span>近日，速回收宣布与广西移动和掌桂 携手，正式开启“以旧换新”合作，通过回</span>
                        </div>
                    </li>
                    <li className='highlight-item'>
                        <div className='item-left'>
                            <img src="/images/banner.jpg" alt=""/>
                        </div>
                        <div className='item-text'>
                            <p>速回收联合广西移动，手机回收以旧换新</p>
                            <span>近日，速回收宣布与广西移动和掌桂 携手，正式开启“以旧换新”合作，通过回</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    );
  }

  componentDidMount(){
    // 初始化轮播图
    this.swiper = new window.Swiper(this.swiperDOM.current, {
        pagination: '.swiper-pagination',
        autoplay : 3000,
        speed:300,
        loop: true
    });
  }
  componentDidUpdate(){
    // 数据发生变化，先销毁，再重新创建轮播图
    this.swiper.destroy();
    this.swiper = new window.Swiper(this.swiperDOM.current, {
        pagination: '.swiper-pagination',
        autoplay : 3000,
        speed:300,
        loop: true
    });
  }
}
