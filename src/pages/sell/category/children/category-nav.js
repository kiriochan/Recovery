import React from 'react';
import './style.scss';
import {connect} from 'react-redux';
import {requestCategoryData} from '../../../../store/modules/sell'

const CategoryNav = (props) => {
    let currentId = 1;
    const navList = [
        {id: 3, name: '手机'},
        {id: 2, name: '平板'},
        {id: 1, name: '笔记本'},
        {id: 6, name: '台式机'},
        {id: 7, name: '相机'},
        {id: 5, name: '手表'},
    ];
    let {itemClick} = props;
    return (
        <nav className={'category-nav-bar'}>
            {
                navList.map(item => (
                    <div className={'tab-item'} key={item.id}
                         onClick={() => {
                             currentId = item.id;
                             console.log('currentId', currentId)
                             itemClick(item.id)
                         }}
                    >
                        <span>{item.name}</span>
                    </div>
                ))
            }
        </nav>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryNav)