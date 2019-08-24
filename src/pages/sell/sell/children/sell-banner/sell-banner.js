import React, {Component} from "react";
import './style.scss';

export default class Banner extends Component {
    swiperDOM = React.createRef();

    render() {
        let {data} = this.props;
        return (
            <div className="swiper-container" ref={this.swiperDOM}>
                <div className="swiper-wrapper">
                    {
                        data && data.map((item) => (
                            <div className="swiper-slide" key={item.id}
                                 onClick={this.bannerClick.bind(this, item.adLink)}>
                                <img className='banner-img' src={item.adCode} alt=""/>
                            </div>
                        ))
                    }

                </div>
                <div className="swiper-pagination"/>
            </div>
        );
    }

    bannerClick(url) {
        window.location.href =url;
    }

    componentDidMount() {
        // 初始化轮播图
        this.swiper = new window.Swiper(this.swiperDOM.current, {
            pagination: '.swiper-pagination',
            autoplay: 3000,
            speed: 300,
            loop: true
        });
    }

    componentDidUpdate() {
        // 数据发生变化，先销毁，再重新创建轮播图
        this.swiper.destroy();
        this.swiper = new window.Swiper(this.swiperDOM.current, {
            pagination: '.swiper-pagination',
            autoplay: 3000,
            speed: 300,
            loop: true
        });
    }
}
