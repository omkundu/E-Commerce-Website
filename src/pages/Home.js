import React from 'react'
import Navbar from '../features/Navbar/Navbar'
import ProductList from '../features/Product-List/components/ProductList'
const Home = () => {
  return (
    <div>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
    </div>
  )
}

export default Home
