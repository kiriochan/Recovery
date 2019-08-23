import React, {Component} from 'react';
import AppScroll from '../../../components/app-scroll/app-scroll'
import TabBar from '../../../components/tab-bar/tab-bar'
import AppHeader from '../../../components/app-header/app-header'
import './style.scss';


export default class Exchange extends Component {

    render(){
        return (
            <div className="exchange">
                <AppHeader title="速回收以旧换新"></AppHeader>
                <AppScroll className="exchange-content">
                    <div className="search" onClick={this.goSearch.bind(this)}>
                        <input className="ipt" type="text" placeholder="搜索您需要的机型"/>
                        <span className="iconfont iconfangdajing"></span>
                    </div>

                </AppScroll>

                <TabBar />
            </div>
        )
    }
    goSearch(){
        // console.log(this.props);
        this.props.history.push('/sell/search');

    }

}