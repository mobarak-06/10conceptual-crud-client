import { useEffect, useState } from "react";
import useAuth from "../../components/useAuth";
import { Link } from "react-router-dom";

const MyCart = () => {
  const { users } = useAuth() || {};
  const [items, setItems] = useState([]);
  const [control, setControl] = useState(false)
 
  useEffect(() => {
    fetch(`http://localhost:5000/myProduct/${users?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, [users, control]);

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/delete/${_id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
     if (data.deletedCount > 0) {
      setControl(!control)
     }
    })
  }
  return (
    <div>
        <h2 className="my-10 text-xl font-bold text-center">My Cart</h2>
      <div className="grid grid-cols-3 gap-6 mx-16">
        {items.map((item) => (
          <div key={item._id}>
            <div className=" bg-base-100 w-96 shadow-xl">
              <figure>
                <img
                  src={item.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p><span className="font-medium">Brand Name:</span> {item.brandName}</p>
                <p><span className="font-medium">Price:</span> {item.price}</p>
                <p><span className="font-medium">Type:</span> {item.type}</p>
                <p><span className="font-medium">Rating:</span> {item.rating}</p>
                <div className="card-actions justify-between">
                  <Link to={`/products/${item._id}`}>
                  <button className="btn btn-accent">Update</button>
                  </Link>
                  <Link>
                  <button onClick={() => handleDelete(item._id)} className="btn btn-error">Delete</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
