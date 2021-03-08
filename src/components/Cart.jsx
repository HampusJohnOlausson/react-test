import React, { useContext } from 'react'
import { CartContext } from './CartContext'

const Cart = () => {

    const [cart, setCart] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, current, ) => acc + current.price, 0);
    return (
        <div>
            <h4>Items in cart: {cart.length}</h4>
            <h4>Total price: {totalPrice}</h4>
            <br/>
        </div>
    )
}

export default Cart
