import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct
    }

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        var tempProducts = [];
        storeProducts.forEach(items => {
            const singleItem = {...items}
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(() => {
             return {products: tempProducts}   
        })
    }

    handleDetail = () => {
        console.log("hello from details...");
    }

    addToCart = (id) => {
        console.log(`hello from cart id is : ${id}`);
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.state.handleDetail,
                addToCart: this.state.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer};