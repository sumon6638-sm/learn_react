import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';



const OrderReview = () => {
    const [products, setProducts] = useProducts();


    const [cart, setCart] = useCart(products);

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }


    const history = useHistory();

    const handleProceedToShipping = () => {
        // setCart([]);
        // clearTheCart();
        history.push('/shipping');
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}>
                        </ReviewItem>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    {/* <Link to='/inventory'>
                        <button className='btn-regular'>Place Order</button>
                    </Link> */}

                    {/* By event handler */}
                    <button onClick = {handleProceedToShipping} className='btn-regular'>Proceed to  Shipping</button>
                </Cart>
            </div>
            
        </div>
    );
};

export default OrderReview;