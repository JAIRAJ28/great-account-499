import React, { useState, useEffect } from 'react';
import { ProductList } from './Product';

function Women() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://zoro-to7p.onrender.com/ALL')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  return <ProductList products={products} />;
}

export default Women;
