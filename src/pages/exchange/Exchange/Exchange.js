import React, {Component} from 'react';
import AppScroll from '../../../components/app-scroll/app-scroll'
import TabBar from '../../../components/tab-bar/tab-bar'
import AppHeader from '../../../components/app-header/app-header'
import Banner from '../children/banner'
import Products from '../children/products'
import{requestExchangeData} from '../../../store/modules/exchange'
import {connect} from 'react-redux'
import './style.scss';


class Exchange extends Component {

    render(props){
        let {exchangeData} = this.props;
      
        // console.log('123',exchangeData);
        // console.log(exchangeData.banners);
        let bannerData=exchangeData.mobilebanners;
        // console.log('234',bannerData);
        let productsData=exchangeData.products;
        // console.log('098',productsData);
        
        return (
            <div className="exchange">
                {/* 头部 */}
                <AppHeader title="速回收以旧换新"></AppHeader>
                <AppScroll className="exchange-content">
                    {/* 搜索框 */}
                    <div className="search" onClick={this.goSearch.bind(this)}>
                        <input className="ipt" type="text" placeholder="搜索您需要的机型"/>
                        <span className="iconfont iconfangdajing"></span>
                    </div>
                    {/* banner */}
                    <div className="banner">
                        <Banner data={bannerData}/>
                    </div>
                    {/* 按钮 */}
                    <ul className="adsbtn">
                        <li>官方授权</li>
                        <li>品牌保障</li>
                    </ul>
                    {/* 换机流程 */}
                    <div className="exchange-item">
                        <p className="exchange-title">换机流程</p>
                        <ul className="exchange-list">
                            <li><i className="iconfont iconpinggu"></i><span>旧机评估</span></li>    
                            <li><i className="iconfont iconjianglijin"></i><span>领取奖励金</span></li>    
                            <li><i className="iconfont iconjiushouji"></i><span>旧手机</span></li>    
                            <li><i className="iconfont iconxinshouji"></i><span>新手机</span></li>    
                        </ul>    
                    </div> 
                    {/*热门换新机型  */}
                    <div className="change-new">
                        <div className="change-header">
                            <p className="exchange-title">热门换新机型</p>
                            <p className="exchange-more">更多机型<i className="iconfont icontri-up"></i></p>
                        </div>
                        <Products data={productsData}/>
                    </div>
                    {/* 服务保障 */}
                    <div className="service">
                        <p className="service-title">服务保障</p>
                        <ul className="service-list">
                            <li className="service-item">
                                <span className="iconfont iconjiagebaohu"></span>
                                <div className="service-text">
                                    <p className="title">价格保护</p>
                                    <p className="detail">官方合作报价</p>
                                </div>
                            </li>
                            <li className="service-item">
                                <span className="iconfont iconweibiaoti-"></span>
                                <div className="service-text">
                                    <p className="title">数据安全</p>
                                    <p className="detail">所有数据 深度粉碎</p>
                                </div>
                            </li>
                            <li className="service-item">
                                <span className="iconfont iconweibiaoti-"></span>
                                <div className="service-text">
                                    <p className="title">品牌信任</p>
                                    <p className="detail">强强联合 信任无忧</p>
                                </div>
                            </li>
                            <li className="service-item">
                                <span className="iconfont iconjiagebaohu"></span>
                                <div className="service-text">
                                    <p className="title">专业质检</p>
                                    <p className="detail">标准化专业检测团队</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </AppScroll>

                <TabBar />
           </div>
        )
    }
    goSearch(){
        // console.log(this.props);
        this.props.history.push('/sell/search')

    }
    componentDidMount() {
        this.props.initData()
    }


}
const mapStateToProps=(state)=>({
    exchangeData:state.exchange.exchangeData
})
const mapDispatchToProps=(dispatch)=>({
    initData(){
        dispatch(requestExchangeData());
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(Exchange);