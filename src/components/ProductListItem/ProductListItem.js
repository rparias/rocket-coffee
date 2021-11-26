import React from 'react'
import './ProductListItem.css'

const ProductListItem = ({name, price, imageUrl, onAddToCart, isSoldOut, isOnSale}) => {
  return (
    <div className={'card' + (isOnSale ? ' onSale' : '')}>
      <h2>{name + (isOnSale ? ' (On Sale)' : '')}</h2>
      <img src={imageUrl} alt={name} />
      <small>{price}</small>
      <button onClick={onAddToCart} disabled={isSoldOut}>{isSoldOut ? 'Sold out' : 'Add to Cart'}</button>
    </div>
  )
}

export default ProductListItem
