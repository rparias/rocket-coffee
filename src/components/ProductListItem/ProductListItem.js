import React from 'react'
import Button from '../Button'
import Card from '../Card'
import Heading from '../Heading'
import Text from '../Text'
import './ProductListItem.css'

const ProductListItem = ({name, price, imageUrl, onAddToCart, isSoldOut, isOnSale}) => {
  return (
    <Card highlight={isOnSale}>
      <Heading>{name} {isOnSale && "(On Sale)"}</Heading>
      <img src={imageUrl} alt={name} />
      <Text>{price}</Text>
      <Button onClick={onAddToCart} disabled={isSoldOut}>{isSoldOut ? 'Sold out' : 'Add to Cart'}</Button>
    </Card>
  )
}

export default ProductListItem
