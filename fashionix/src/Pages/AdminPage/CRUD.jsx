import React, { useState, useEffect } from "react";


//Admin Page With all CRUD-Ops :- Admin can Add/Delete/Edit the product from DOM as well as JSON Server.

export default function Admin() {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [brand, setBrand] = useState("");
    const [color, setColor] = useState("");

    useEffect(() => {
        fetch("https://zoro-to7p.onrender.com/ALL")
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    const addProduct = () => {
        const newProduct = {
            name: name,
            description: description,
            image: image,
            price: price,
            brand: brand,
            color: color
        };

        fetch("https://zoro-to7p.onrender.com/ALL", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
            .then((response) => response.json())
            .then((data) => {
                setProducts([...products, data]);
                setName("");
                setDescription("");
                setImage("");
                setPrice("");
                setBrand("");
                setColor("");
            });
    };

    const deleteProduct = (id) => {
        fetch(`https://zoro-to7p.onrender.com/ALL/${id}`, {
            method: "DELETE"
        })
            .then(() => setProducts(products.filter((product) => product.id !== id)))
            .catch((error) => console.error(error));
    };

    const editProduct = (id, updatedProduct) => {
        fetch(`https://zoro-to7p.onrender.com/ALL/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
            .then((response) => response.json())
            .then((data) => {
                const updatedProducts = products.map((product) => {
                    if (product.id === id) {
                        return data;
                    } else {
                        return product;
                    }
                });
                setProducts(updatedProducts);
            })
            .catch((error) => console.error(error));
    };

    return (
        <div>
            <h1> Admin Page </h1>{" "}
            <form>
                <h2> Add a Product </h2>{" "}
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />{" "}
                </label>{" "}
                <label>
                    Description:
                    <input
                        type="text"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />{" "}
                </label>{" "}
                <label>
                    Image:
                    <input
                        type="text"
                        value={image}
                        onChange={(event) => setImage(event.target.value)}
                    />{" "}
                </label>{" "}
                <label>
                    Price:
                    <input
                        type="text"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                    />{" "}
                </label>{" "}
                <label>
                    Brand:
                    <input
                        type="text"
                        value={brand}
                        onChange={(event) => setBrand(event.target.value)}
                    />{" "}
                </label>{" "}
                <label>
                    Color:
                    <input
                        type="text"
                        value={color}
                        onChange={(event) => setColor(event.target.value)}
                    />
                </label>
                <button type="button" onClick={addProduct}>
                    Add Product{" "}
                </button>{" "}
            </form>
            <div className="product-wrapper">
                {" "}
                {products.map((product) => (
                    <div key={product.id} className="product">
                        <h2> {product.name} </h2>{" "}
                        <p> {product.description} </p>{" "}
                        <img src={product.image} alt={product.name} />
                        <p> Price: {product.price} </p> <p> Brand: {product.brand} </p>{" "}
                        <p> Color: {product.color} </p>{" "}
                        <button onClick={() => deleteProduct(product.id)}>
                            Delete Product{" "}
                        </button>{" "}
                        <button
                            onClick={() => {
                                const updatedName = prompt(
                                    "Enter the updated product name:",
                                    product.name
                                );
                                const updatedDescription = prompt(
                                    "Enter the updated product description:",
                                    product.description
                                );
                                const updatedImage = prompt(
                                    "Enter the updated product image URL:",
                                    product.image
                                );
                                const updatedPrice = prompt(
                                    "Enter the updated product price:",
                                    product.price
                                );
                                const updatedBrand = prompt(
                                    "Enter the updated product brand:",
                                    product.brand
                                );
                                const updatedColor = prompt(
                                    "Enter the updated product color:",
                                    product.color
                                );

                                const updatedProduct = {
                                    name: updatedName,
                                    description: updatedDescription,
                                    image: updatedImage,
                                    price: updatedPrice,
                                    brand: updatedBrand,
                                    color: updatedColor
                                };

                                fetch(`https://zoro-to7p.onrender.com/ALL/${product.id}`, {
                                    method: "PUT",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(updatedProduct)
                                })
                                    .then((response) => response.json())
                                    .then((data) => {
                                        const updatedProducts = products.map((p) =>
                                            p.id === data.id ? data : p
                                        );
                                        setProducts(updatedProducts);
                                    })
                                    .catch((error) => console.error(error));
                            }}
                        >
                            Edit Product{" "}
                        </button>{" "}
                    </div>
                ))}{" "}
            </div>{" "}
        </div>
    );
}
