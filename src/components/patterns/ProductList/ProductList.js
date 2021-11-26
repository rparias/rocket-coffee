import React from 'react'

export const statusTypes = {
  loading: 'loading',
  errored: 'errored',
  loaded: 'loaded'
}

const ProductList = ({status, ...otherProps}) => {

  if (status === statusTypes.loading) {
    // return <Loading />
  }

  if (status === statusTypes.errored) {
    // return <Error message="Failded to load data" />
  }

  return <div></div>
}

export default ProductList
