import React, { useState, useEffect } from 'react';
import {ProductList} from './Product';
import SearchBar from './SearchBar';

function Men() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://zara-api-data.onrender.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  return <>
  <SearchBar/>
  <ProductList products={products} />;
</>
}

export default Men;
