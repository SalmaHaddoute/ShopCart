import React, { useContext } from "react";
import products from "./assets/products";
import "./Product.css";
import { ShopContext } from "./ShopContext"; // Import ShopContext

const ProductsDisplay = () => {
    const { addToCart } = useContext(ShopContext); // Get addToCart from context

    return (
        <div className="products-container">
            <h1 className="products-title">Products</h1>
            <div className="products-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <h2 className="product-name">{product.name}</h2>
                        <img
                            src={product.image}
                            alt={product.name}
                            className="product-image"
                        />
                        <p className="old-price">Old Price: {product.old_price}</p>
                        <p className="new-price">New Price: {product.new_price}</p>
                        <button
                            className="add-to-cart-btn"
                            onClick={() => addToCart(product.id)} // Call addToCart with product ID
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsDisplay;


