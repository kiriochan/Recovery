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
      
        console.log('123',exchangeData);
        // console.log(exchangeData.banners);
        let bannerData=exchangeData.banners;
        // console.log('234',bannerData);
        let productsData=exchangeData.products;
        console.log('098',productsData);
        
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