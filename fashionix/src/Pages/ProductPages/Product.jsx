import React from 'react';
import './product.css';
import { BiCartAdd } from 'react-icons/bi';


function Product({ name, price, image }) {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <div className="cartButton"><BiCartAdd size={25}/></div>
      <p>{name}</p>
      <p>₹ {price}</p>
    </div>
  );
}

function ProductList({ products }) {
  const rows = [];
  for (let i = 0; i < products.length; i += 5) {
    const rowProducts = products.slice(i, i + 5);
    rows.push(
      <div key={i} className="product-row">
        {rowProducts.map(product => (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    );
  }
  return <div className="product-list">{rows}</div>
}

export { Product, ProductList };
