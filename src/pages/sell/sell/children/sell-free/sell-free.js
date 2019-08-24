import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {requestCategoryData} from "../../../../../store/modules/sell"
import './style.scss';

class SellFree extends React.PureComponent {

    render() {
        let {itemClick} = this.props;
        let data = [
            {title: '笔记本', pic: '/images/bijiben.png', typeId: 1},
            {title: '平板', pic: '/images/pad.png', typeId: 2},
            {title: '手机', pic: '/images/phone.png', typeId: 3},
            {title: '数码', pic: '/images/shuma.png', typeId: 4},
            {title: '手表', pic: '/images/shoubiao.png', typeId: 5},
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
                        <Link  to="/sell/category"
                            onClick={() => {
                            itemClick(3)
                        }}>全部型号</Link>
                    </div>
                </div>
                <div className='free-content'>
                    <ul className='list'>
                        {
                            data.map(item => (
                                <Link className='item'
                                      to="/sell/category"
                                      onClick={() => {
                                          itemClick(item.typeId)

                                      }}
                                      key={item.typeId}>
                                    <img src={item.pic} alt=""
                                    />
                                    <p>{item.title}</p>
                                </Link>
                            ))
                        }

                    </ul>
                </div>
                <div className='btn'>
                    <Link  className='btn-text' to="/sell/category" onClick={()=>{ itemClick(3)}}>估价下单</Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    itemClick(typeId) {
        console.log(typeId);
        dispatch(requestCategoryData({
            'typeId': typeId,
            'id': 0
        }));
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(SellFree);