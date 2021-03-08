import React from 'react'
import Cart from './Cart'
import { CartProvider } from './CartContext'
import ItemList from './ItemList'

const Layout = () => {
    return (
      <CartProvider>
        <div>
          <Cart />
          <ItemList />
        </div>
      </CartProvider>
    );
}

export default Layout
