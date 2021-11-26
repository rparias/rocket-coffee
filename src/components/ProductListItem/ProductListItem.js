import React from 'react'
import './ProductListItem.css'

const ProductListItem = ({name, price, imageUrl, onAddToCart, isSoldOut}) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} />
      <small>{price}</small>
      <button onClick={onAddToCart} disabled={isSoldOut}>{isSoldOut ? 'Sold out' : 'Add to Cart'}</button>
    </div>
  )
}

export default ProductListItem
