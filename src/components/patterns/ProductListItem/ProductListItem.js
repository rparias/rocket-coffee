import React from 'react'
import Button from '../../atoms/Button'
import Card from '../../atoms/Card'
import Heading from '../../atoms/Heading'
import Text from '../../atoms/Text'

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
