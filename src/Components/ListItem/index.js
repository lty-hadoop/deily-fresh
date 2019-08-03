import React, { Component } from 'react'

class ListItem extends Component {
	toDetail(data) {
		if(this.props.handleDetail){
			this.props.handleDetail(data)
		}
    }
	render() {	
		return (
			<div>
				{this.props.datas.map((item, i) => 
                            <div className="product-list-item-wrap" key={i} onClick={this.toDetail.bind(this, item.id)}>
                                <div className="product-item-container">
                                    <div className="product-item">
                                        <div className="item-image">
                                            <img className="x-img" src={item.url} alt={item.url} />
                                        </div>
                                        <div className="item-detail">
                                            <div className="item-title">
                                                <p className="sub-title">{item.title}</p>
                                                <p className="mess-title">{item.subTitle}</p>
                                            </div>
                                            <div className="item-tag">
                                                <div className="product-item-tag">新人专享</div>
                                            </div>
                                            <div className="item-bottom">
                                                <div className="item-price">
                                                    <span>￥</span>
                                                    <span className="price">{item.price}</span>
                                                    <span className="has-line-through">
                                                        ￥{item.oldPrice}
                                                    </span>
                                                </div>
                                                <div className="product-item-cart">
                                                    <span className="car-icon"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>            
                    )}
			</div>
			
		)
	}
}

export default ListItem