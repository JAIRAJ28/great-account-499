import React from 'react';
import './product.css';
import { CiCirclePlus } from 'react-icons/ci';
import {BsCurrencyRupee} from 'react-icons/bs'


function Product({ name, price, image,id }) {
  return (
    <div className="product">
      <h2>{id}</h2>
      <img src={image} alt={name} />
      <CiCirclePlus/>
      <p>{name}</p>
      <p><BsCurrencyRupee/>{price}</p>
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
            id={product.id}
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
