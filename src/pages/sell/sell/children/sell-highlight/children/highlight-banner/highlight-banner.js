import React, { Component } from "react";
import './style.scss';

export default class Banner extends Component {
  swiperDOM = React.createRef();
  render() {
    let {data} = this.props;
    return (
      <div className="swiper-container" ref={this.swiperDOM}>
        <div className="swiper-wrapper">
            {
                data && data.map((item)=>(
                    <div className="swiper-slide" key={item.addTime}>
                        {/* <ul className='highlight-list'>
                            {
                                item && item.map((info)=>(
                                    <li className='highlight-item'>
                                        <div className='item-left'>
                                            <img src={info.articleImg} alt=""/>
                                        </div>
                                        <div className='item-text'> 
                                            <p>{info.title}</p>
                                            <span>{info.articleDesc}</span>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul> */}
                        <ul className='highlight-list'>
                            <li className='highlight-item'>
                                <div className='item-left'>
                                    <img src={item.articleImg} alt=""/>
                                </div>
                                <div className='item-text'> 
                                    <p>{item.title}</p>
                                    <span>{item.articleDesc}</span>
                                </div>
                            </li>
                            {/* <li className='highlight-item'>
                                <div className='item-left'>
                                    <img src={item.articleImg} alt=""/>
                                </div>
                                <div className='item-text'> 
                                    <p>{item.title}</p>
                                    <span>{item.articleDesc}</span>
                                </div>
                            </li> */}
                        </ul>
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
