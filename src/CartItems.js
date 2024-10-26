import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from './ShopContext';

import remove_icon from './assets/cart_cross_icon.png';


const CartItems = () => {
    const { products = [], cartItems, removeFromCart,getTotalCartAmount } = useContext(ShopContext) || {};


    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {Array.isArray(products) && products.map((e) => {
                if (!e.id) return null;
                const quantity = cartItems[e.id] || 0;
                if (quantity > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitem-format cartitems-format-main">
                                <img src={e.image} alt='' className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{quantity}</button>
                                <p>${!isNaN(parseFloat(e.new_price)) && !isNaN(quantity) ? (parseFloat(e.new_price) * quantity).toFixed(2) : '0.00'}</p>

                                
                                <img 
                                    src={remove_icon} 
                                    onClick={() => removeFromCart(e.id)} 
                                    alt="Remove item" 
                                    className="remove-icon"
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
    </div>
    );
};

export default CartItems;