import { useState, useEffect } from "react";
import Navbar from "../../components/navbar";

export default function Store() {
    const [products, setProducts] = useState([]);
    const url = 'https://fakestoreapi.com/products';

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }
    //console.log(products);
    return (
        <div>
            <Navbar />
            <h5>Store</h5>
            <ul>
                {products &&
                    products.map(p =>
                        <Product product={p} key={p.id} />
                    )

                }
            </ul>
            {/* <li key={p.id}>{p.id}: <img src={p.image} width="100px" height="60px" /> {p.title}</li>     */}
        </div>
    )
}

const Product = (data) => {
    let product = data.product;
    console.log(product);
    return (
        <div className="fs-wrapper">
            <div className="fs-outer">
                <div className="fs-content animated fadeInLeft">
                    <span className="fs-bg animated fadeInDown">{product.rating?.rate}</span>
                    <h4>{product.title}</h4>
                    <p>{product.description}</p>

                    <div className="fs-button">
                        <a href="#">{product.price}</a><a className="cart-btn" href="#"><i className="cart-icon ion-bag"></i>ADD TO CART</a>
                    </div>

                </div>
                <img src={product.image} width="300px" className="fs-animated fadeInRight" />
            </div>
            <p className="fs-footer">{product.category}</p>
        </div>
    )
}