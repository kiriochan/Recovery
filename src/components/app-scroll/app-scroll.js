import React, { Component } from 'react'
import './style.scss'
import BScroll from 'better-scroll'

export default class AppScroll extends Component {
    scrollDOM = React.createRef();

    render() {
        let {className, children} = this.props;
        return (
            <div className={`scroll-wrap ${className}`} ref={this.scrollDOM}>
                <div className="scroll-content">
                    {children}
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.scroll = new BScroll(this.scrollDOM.current, {
            tap: true,
            click: true,
            scrollX: false,
            scrollY: true
        });
        // 监听滚动开始前的事件
        this.scroll.on('beforeScrollStart', ()=>{
            this.scroll.refresh();//滚动开始前重新计算高度
        });
    }

    scrollTo = (y)=>{
        let maxY = this.scroll.maxScrollY;
        if(maxY <= y){
            this.scroll.scrollTo(0, y, 200);
        }else{
            this.scroll.scrollTo(0, maxY, 200);
        }
        
    }
}
