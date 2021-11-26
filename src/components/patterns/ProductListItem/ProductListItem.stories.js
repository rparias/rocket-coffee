import React from 'react'
import ProductListItem from './ProductListItem'
import { action } from '@storybook/addon-actions'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'

// original way to crate stories in Storybook
// import { storiesOf } from '@storybook/react'
// storiesOf('ProductListItem', module).add('standard', () => <ProductListItem />)

// new way to create stories in Storybook
export default { 
  title: 'ProductListItem',
  decorators: [withKnobs] 
}

export const standard = () => (
  <ProductListItem 
    name={ text("Name", "Standard Coffe") }
    price={ text("price", "2.50") }
    onAddToCart={action('Add to cart clicked')}
    imageUrl={ text("imageUrl", "https://source.unsplash.com/tNALoIZhqVM/200x100/") }
    isSoldOut={ boolean("isSoldOut", false) }
    isOnSale={ boolean("isOnSale", false) }
  />
)