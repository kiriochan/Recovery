import React, { Component } from "react";
import {connect} from 'react-redux'


 class Products extends Component {
    render(){
        let {data}= this.props;
        // console.log(data);
        
        return(
            
            
            <ul className="products-content">
                {
                    data&&data.map((item)=>(
                        <li className="products-item" key={item.id} >
                            <img src={item.img} alt=""/>
                            <div className="products-text">
                                <p className="products-title">{item.title}</p>
                                <p className="products-price">新机价格<span>￥{item.price}</span></p>
                            </div>
                          
                            <p className="enjoy">享受环保补助</p>
                            <p className="change-newphone">去换新</p>
                            <p className="products-discount">-￥{item.bonus_price}</p>

                        </li>
                        
                    ))
                }
            </ul>
            
        )
    }
}
// const mapStateToProps=(state)=>({

// })
// const mapDispatchToProps=(dispatch)=>({
//     getDetail(id){
//         console.log(id);
        
//     }
// })

export default Products