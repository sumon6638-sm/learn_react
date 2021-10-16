import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // console.log('Product api called');
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
                // console.log('Products received');
            });
    }, [])

    const [cart, setCart] = useState([]);
    
    const handleAddToCart = (product) => {
        const exist = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exist) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }

        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }

        // const newCart = [...cart, product];
        console.log(newCart);
        setCart(newCart);

        // save to local storage for now
        addToDb(product.key)
    }

    useEffect(() => {
        // console.log('localStorage Cart Called');
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                // console.log(savedCart);
                // console.log(key);
                // console.log(products);
                // console.log(key, savedCart[key]);
                const addedProduct = products.find(product => product.key === key);
                // console.log(key, addedProduct);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    // console.log(addedProduct)
                    storedCart.push(addedProduct);
                }
                
            }
            setCart(storedCart);
        }
    }, [products])

    const [displayProducts, setDisplayProducts] = useState([]);

    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts);

        console.log(matchedProducts.length);
    }

    return (
        <>
            <div className="search-container">
                <input type="text" onChange={handleSearch} placeholder='search your product'/>
            </div>
            <div className='shop-container'>
                <div className="product-container">
                    <h3>Products: {products.length}</h3>
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}>
                        </Product>)

                        // products.map(product =>Product(product))
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to='/review'>
                            <button className='btn-regular'>Review Your Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;