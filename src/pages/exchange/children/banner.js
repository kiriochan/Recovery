import React, { Component } from "react";

export default class Banner extends Component {
  swiperDOM = React.createRef();
  render() {
    let {data} = this.props;
    // console.log('789',data);
    
    return (
      <div className="swiper-container" ref={this.swiperDOM}>
        <div className="swiper-wrapper">
        {
          data && data.map((item)=>(
            <div className="swiper-slide" key={item.id}>
              <img src={item.code} alt={item.name} onClick={this.goDatail.bind(this,item.link)}/>
            </div>
          ))
        }
        </div>
        <div className="swiper-pagination" />
      </div>
    );
    
  }
  goDatail(url){
    // console.log(123);
    
    window.location.href=url
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
