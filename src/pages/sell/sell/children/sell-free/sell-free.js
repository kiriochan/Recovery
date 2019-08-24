import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {requestCategoryData} from "../../../../../store/modules/sell"
import './style.scss';

class SellFree extends React.PureComponent {

    render() {
        let {itemClick} = this.props;
        let data = [
            {title: '笔记本', pic: '/images/bijiben.png', id: 1},
            {title: '平板', pic: '/images/pad.png', id: 2},
            {title: '手机', pic: '/images/phone.png', id: 3},
            {title: '数码', pic: '/images/shuma.png', id: 4},
            {title: '手表', pic: '/images/shoubiao.png', id: 5},
        ]
        return (
            <div className='sell-subassembly'>
                <div className='free-title'>
                    <div className='left'>
                        <img src="/images/free.png" alt=""/>
                        <i className='iconfont iconwenhao'></i>
                    </div>
                    <div className='right'>
                        <i className='iconfont iconcaidan'></i>
                        <span>全部型号</span>
                    </div>
                </div>
                <div className='free-content'>
                    <ul className='list'>
                        {
                            data.map(item => (
                                <Link className='item'
                                      to="/sell/category"
                                      onClick={() => {
                                          itemClick(item.id)

                                      }}
                                      key={item.id}>
                                    <img src={item.pic} alt=""
                                    />
                                    <p>{item.title}</p>
                                </Link>
                            ))
                        }

                    </ul>
                </div>
                <div className='btn'>
                    <p>估价下单</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    itemClick(id) {
        console.log(id);
        // this.history.push('/sell/category')
        dispatch(requestCategoryData(id));
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(SellFree);