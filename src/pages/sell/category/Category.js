import React from 'react';
import {connect} from 'react-redux';
import CategoryNav from './children/category-nav';
import './style.scss'
import CategoryLeft from './children/category-left';
import CategoryRight from './children/category-right';

class Category extends React.PureComponent {
    render() {
        let {category} = this.props;
        console.log('category',category);
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

                    <CategoryNav/>

                    <div className={'content-scroll'}>
                        <CategoryLeft data={category.brands}/>
                        <CategoryRight data={category.products}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    category: state.sell.category,
})


const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Category);

