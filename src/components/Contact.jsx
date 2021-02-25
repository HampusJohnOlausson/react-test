import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';


const Contact = () => {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );
    const items = await data.json();
    console.log(items.items);
    setItems(items.items);
  };

    return (
      <div>
        <main style={mainStyle}>
          {items.map((item) => (
            <h1 key={item.itemid}>
              <Link to={`/contact/${items.itemid}`}>{item.name}</Link>
            </h1>
          ))}
        </main>
      </div>
    );
}

export default Contact

const mainStyle={
    background: 'yellow',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
}