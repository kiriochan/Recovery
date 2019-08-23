import React, { Component } from 'react';
import './style.scss'

const ErrorPanel = ()=>{
    return (
         <div className='error'>
            <img src="/images/error.png" alt=''/>
            <p>崩溃了~请尝试刷新</p>
        </div>
    )
}

class ErrorBoundary extends Component {
    state={
        isError:false
    }
    render() {
        return this.state.isError ? <ErrorPanel/> : this.props.children;
    }

    componentDidCatch(){
        this.setState({isError:true});
    }

}

export default ErrorBoundary;