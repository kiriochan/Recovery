import React, {Component} from 'react';
import {connect} from 'react-redux'
import Header from '../../../components/app-header/app-header';
import './style.scss';
import { Toast } from 'antd-mobile';
import {requestSendCodeAction, requestLoginByCodeAction, requestCheckLoginAction} from '../../../store/modules/mine';


class Mine extends Component {
    state = {
        phone: '',
        code: '',
        sendClassName: '',
        loginClassName: ''
    }

    render(){
        let {loginTip, sendCodeAction, loginByCodeAction} = this.props;
        let disable = loginTip.endsWith('s');
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
                            <input type="number" placeholder="请输入手机号码" className="phone-num"
                             value={this.state.phone} onChange={this.phoneAction}/>
                        </div>

                        <div className="inpt-password">
                            <span className="iconfont icon-items">&#xe651;</span>
                            <input type="number" placeholder="请输入验证码" className="code-num"
                            value={this.state.code} onChange={this.codeAction}/>
                            <span className={`send-code${this.state.sendClassName}`}
                                onClick={()=>{return disable ? '' : sendCodeAction(this.state.phone);}}>
                                {loginTip}
                            </span>
                        </div>

                        <button className={`login${this.state.sendClassName}${this.state.loginClassName}`}
                         onClick={()=>loginByCodeAction(this.state.phone, this.state.code)}>
                        登录
                        </button>
                    </div>

                </div>


            </div>
        )
    }

    componentDidMount(){
        // 检查登录是否过期
        this.props.checkLoginAction();
    };

    backAction = ()=>{
        this.props.history.goBack();
    }

    phoneAction = (ev)=>{
        switch(ev.target.value.length){
            case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10:
                this.setState({
                    phone: ev.target.value,
                    sendClassName: ""
                })
            break;
            case 11:
                this.setState({
                    phone: ev.target.value,
                    sendClassName: " phoneOk"
                })
            break;
            default:;
        }
    }
    codeAction = (ev)=>{
        switch(ev.target.value.length){
            case 0: case 1: case 2: case 3:
                this.setState({
                    code: ev.target.value,
                    loginClassName: ""
                })
            break;
            case 4:
                this.setState({
                    code: ev.target.value,
                    loginClassName: "AndphoneOk"
                })
            break;
            default:;
        }
    }

}

const mapStateToProps = (state)=>({
    loginTip: state.mine.loginTip
})

const mapDispatchToProps = (dispatch)=>({
    sendCodeAction(phone){
        if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(phone))){
            Toast.info('格式不正确!', 1.5);
        }
        else{
            let action = requestSendCodeAction(phone);
            dispatch(action);
        }
    },
    loginByCodeAction(phone, code){
        if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(phone))){
            Toast.info('格式不正确!', 1.5);
            return;
        }
        if(!(/^\d{6}$/.test(code))){
            Toast.info('格式不正确!', 1.5);
            return;
        }
        let action = requestLoginByCodeAction(phone, code);
        dispatch(action);
    },
    checkLoginAction(){
        let action = requestCheckLoginAction();
        dispatch(action);
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Mine);