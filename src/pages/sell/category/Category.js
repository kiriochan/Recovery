import React from 'react';
import {connect} from 'react-redux';
import './style.scss'

class Category extends React.PureComponent {

    render() {
        return (
            <div className={'category'}>
                <div className='content'>
                    <div className='header'>
                        <i className='iconfont iconico_leftarrow'
                           onClick={() => {
                               this.props.history.goBack()
                           }}></i>

                        <div className='search'>
                            <i className='iconfont iconfangdajing'></i>
                            <input className='btn' type="text" placeholder='请输入搜索关键词'/>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({})


const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Category);

