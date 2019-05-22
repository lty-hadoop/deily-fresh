import React, { Component } from 'react'

class ProductDetail extends Component {
    constructor(props, context) {
        super(props, context)
        console.info(props)
        this.setState = {}
    }
    componentDidMount () {
        console.log(this)
    }
    render() {
        return (
            <div>详情页面</div>
        );
    }
}

export default ProductDetail;