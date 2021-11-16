import React from 'react'
import ProductListItem from './ProductListItem'
import { action } from '@storybook/addon-actions'

// original way to crate stories in Storybook
// import { storiesOf } from '@storybook/react'
// storiesOf('ProductListItem', module).add('standard', () => <ProductListItem />)

// new way to create stories in Storybook
export default { title: 'ProductListItem' }
export const standard = () => (
  <ProductListItem 
    name="Standard Coffe"
    price="2.50"
    onAddToCart={action('Added to cart')}
    imageUrl="https://source.unsplash.com/tNALoIZhqVM/200x100/"
  />
)