import React, { Component } from "react";

export default class Banner extends Component {
  swiperDOM = React.createRef();
  render() {
    let {data} = this.props;
    return (
      <div className="swiper-container" ref={this.swiperDOM}>
        <div className="swiper-wrapper">
        {
          data.map((item)=>(
            <div className="swiper-slide" key={item.id}>
              <img src={item.url} alt=""/>
            </div>
          ))
        }
        </div>
        <div className="swiper-pagination" />
      </div>
    );
  }

  componentDidMount(){
    // 初始化轮播图
    this.swiper = new window.Swiper(this.swiperDOM.current, {
      pagination: '.swiper-pagination',
      loop: true
    });
  }
  componentDidUpdate(){
    // 数据发生变化，先销毁，再重新创建轮播图
    this.swiper.destroy();
    this.swiper = new window.Swiper(this.swiperDOM.current, {
      pagination: '.swiper-pagination',
      loop: true
    });
  }
}