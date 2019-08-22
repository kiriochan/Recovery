import React, {Component} from 'react';

const ErrorPanel = ()=>{
    return (
        <div>出错了</div>
    )
}

export default class ErrorBoundary extends Component {
    state = {
        isError: false
    }

    render(){
        return this.state.isError ? <ErrorPanel/> : this.props.children;
    }

    componentDidCatch(){// 处理错误的固定方法: componentDidCatch
        this.setState({isError: true});
    }
}