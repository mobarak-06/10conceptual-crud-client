import { useEffect, useState } from "react";


const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setProducts(data);
        })
    }, [])
    return (
        <div className="grid grid-cols-3 mx-16 mt-10">
           {
            products.map(product => (
                <div key={product._id}>
            <div className=" bg-base-100 w-96 shadow-xl">
              <figure>
                <img
                  src={product.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p><span className="font-medium">Brand Name:</span> {product.brandName}</p>
                <p><span className="font-medium">Price:</span> {product.price}</p>
                <p><span className="font-medium">Type:</span> {product.type}</p>
                <p><span className="font-medium">Rating:</span> {product.rating}</p>
              </div>
            </div>
          </div>
            ))
           }
        </div>
    );
};

export default Home;