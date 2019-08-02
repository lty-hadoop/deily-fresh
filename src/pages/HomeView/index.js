import React, { Component } from 'react'
import './index.scss'

// const product = [
//     {"id": 34975, "url": require('./images/1.jpg'), "title": "进口香蕉1袋500g起「新人特惠」", "subTitle": "跟鲜花一起运过来的香蕉","price": 6.3, "oldPrice": 12.9},
//     {"id": 34785, "url": require('./images/2.jpg'), "title": "妃子笑荔枝500g「新人特惠」", "subTitle": "妃子笑嘻嘻，吃了好甜蜜","price": 9.9, "oldPrice": 26.9},
//     {"id": 23486, "url": require('./images/3.jpg'), "title": "千禧圣女果1盒500g「新人特惠」", "subTitle": "90斤女孩的饭后小甜点","price": 6.3, "oldPrice": 12.9},
//     {"id": 34975, "url": require('./images/1.jpg'), "title": "进口香蕉1袋500g起「新人特惠」", "subTitle": "跟鲜花一起运过来的香蕉","price": 6.3, "oldPrice": 12.9},
//     {"id": 34785, "url": require('./images/2.jpg'), "title": "妃子笑荔枝500g「新人特惠」", "subTitle": "妃子笑嘻嘻，吃了好甜蜜","price": 9.9, "oldPrice": 26.9},
//     {"id": 23486, "url": require('./images/3.jpg'), "title": "千禧圣女果1盒500g「新人特惠」", "subTitle": "90斤女孩的饭后小甜点","price": 6.3, "oldPrice": 12.9},
// ]

class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.handleSearch = this.handleSearch.bind(this)
    }

    componentDidMount() {
        fetch('/mock/mock.json').then(res => {
            if(res.ok) {
                res.json().then(data => {
                    this.setState({
                        data
                    })
                })
            }
        })
    }

    handleSearch () {
        console.log('搜索')
    }
    toDetail(data) {
        // console.log(`/product/${data}`)
        this.props.history.push(`/product/${data}`)
    }
    render() {
        return (
            <div className="home-view">
                <div className="header">
                    <div className="header-left">
                        <span className="address">闵行区芦恒路2159弄27号</span>    
                    </div>
                    <div className="header-right">
                        <div className="search-nav" onClick={this.handleSearch}>
                            <div className="icon iconfont iconweibiaoti-"></div>
                            <div className="search-nav-text">小龙虾</div>
                        </div>
                    </div>
                </div>

                <section className="main">
                    <div className="banner-img"></div>
                    {this.state.data.map((item, i) => {
                        return (
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
                        )                   
                    })}
                    
                </section>                
            </div>
        );
    }
}

export default HomeView;