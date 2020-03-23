import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import ButtonContainer from './ButtonContainer'

export default class Details extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>
                    { (value) => {
                        const {id, company, img, info, price, title, inCart} = value.detailProduct;
                        return (
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                        <h1>{title}</h1>
                                    </div>
                                </div>
                            
                                <div className="row">
                                    <div className="col-10 mx-auto cil-md-6 my-3 text-capitailize">
                                        <img alt="Product Image" src={img} className="img-fluid"></img>
                                    </div>
                                    <div className="col-10 mx-auto cil-md-6 my-3 text-capitailize">
                                        <h2>Model : {title}</h2>
                                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                            made by : <span className="text-uppercase">{company}</span>
                                        </h4>
                                        <h4 className="text-blue">
                                            <strong>
                                                price: <span>$</span>
                                                {price}
                                            </strong>
                                        </h4>
                                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                            some info about the product
                                        </p>
                                        <p className="text-muted lead">
                                            {info}
                                        </p>
                                        <Link to="/">
                                            <ButtonContainer>back to products</ButtonContainer>
                                        </Link>
                                        <ButtonContainer onClick={() => {value.addToCart(id);}}>
                                            {inCart ? 'inCart' : "add to cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        );
                    }}
                </ProductConsumer>
            </div>
        )
    }
}
