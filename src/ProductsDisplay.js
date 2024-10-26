import React from 'react'
import products from './assets/products'

const ProductsDisplay = () => {
    return (
        <div>
            <h1>Products</h1>
            {products.map((product) => (
                <div key={product.id}>
                <h2>{product.name}</h2>
                <img src={`${process.env.PUBLIC_URL}/${product.image}`} alt={product.name} />
                <p>Old_Price: {product.old_price}</p>
                <p>New_Price: {product.new_price}</p>
                <button>Add to Cart</button>
                <hr />
                </div>
            ))} 
        </div>
    )
}

export default ProductsDisplay

