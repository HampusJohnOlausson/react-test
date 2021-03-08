import React from 'react'
import Item from './Item'

const ItemList = () => {

    const database = [
        { name: 'T-shirt', price: 19.99, id: 1},
        { name: 'Jeans', price: 39.99, id: 2},
        { name: 'Hoodie', price: 29.99, id: 3},
    ]

    return (
        <div>
            {
                database.map(item => (
                    <Item name={item.name} price={item.price} key={item.id}/>
                ))
            }
        </div>
    )
}

export default ItemList
