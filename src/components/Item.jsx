import React, { useContext } from 'react'
import { CartContext } from './CartContext';

const Item = (props) => {

    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
        const tshirt = {name: props.name, price: props.price }
        setCart(current => [...current, tshirt]);
    }

    return (
        <div>
            <h2>{props.name}</h2>
            <h4>{props.price}</h4>
            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}

export default Item
