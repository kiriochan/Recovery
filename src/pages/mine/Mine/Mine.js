import React, {Component} from 'react';
import Header from '../../../components/app-header/app-header';
import './style.scss';


export default class Mine extends Component {
    state = {
        phone: '',
        code: ''
    }

    render(){
        return (
            <div id="mine" className="subpage">
                <Header left={
                    <span className="iconfont">&#xe628;</span>
                } leftClick={this.backAction}/>

                <div className="content">
                    <div className="logo-wrap">
                        <div className="logo-hi">
                            <h2>Hi！</h2>
                            <p>欢迎加入速回收</p>
                        </div>
                        <div className="logo-img">
                            <img src="/images/mine/userlogo.e273d4b7.png" alt="logo"/>
                        </div>
                    </div>

                    <div className="inpt-wrap">
                        <div className="inpt-phone">
                            <span className="iconfont icon-items">&#xe6c7;</span>
                            <input type="text" placeholder="请输入手机号码" className="phone-num"/>
                        </div>
                        <div className="inpt-password">
                            <span className="iconfont icon-items">&#xe651;</span>
                            <input type="text" placeholder="请输入验证码" className="phone-num"/>
                            <span className="send-code">发送验证码</span>
                        </div>

                        <button>登录</button>
                    </div>

                </div>


            </div>
        )
    }

    backAction = ()=>{
        this.props.history.goBack();
    }

}