import React, { Component } from 'react';
import Header from '../../../../../components/app-header/app-header';
import './style.scss';

class SelectCity extends Component {
    render() {
        return (
            <div className='select-city'>
                <Header title='选择城市' left={
                    <span className="iconfont iconico_leftarrow"></span>
                } leftClick={this.backAction}/>
            </div>
        );
    }

    backAction = ()=>{
        this.props.history.goBack();
    }
}

export default SelectCity;