import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';
/* 
const Product = (props) => {
    console.log(props)
    return (
        <div className='product'>
            
            <div>
                <img src={props.img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{props.name.slice(0, 50)}</h4>
                <p><small>by: {props.seller}</small></p>
                <p>${props.price}</p>
                <p><small>only {props.stock} left in stock - order soon</small></p>
            </div>
        </div>
    );
};
 */

const Product = (props) => {
    // console.log(props)
    const { name, img, seller, price, stock, star } = props.product;
    // const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product'>

            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{name.slice(0, 50)}</h4>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating initialRating={star}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                <br />
                <button onClick={() => props.handleAddToCart(props.product)} className='btn-regular'><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};
export default Product;