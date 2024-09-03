import useAuth from "../../components/useAuth";

const AddProduct = () => {
  const {users} = useAuth() || {};
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const email = users.email;

    const products = {
      name,
      image,
      brandName,
      type,
      price,
      rating,
      email
    };
    console.log(products);
 

    fetch("http://localhost:5000/addProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("product added successfully !")
        }
        form.reset();
      });
  };
  return (
    <div
      className="md:w-[1200px] w-[650px]
          h-[765px] bg-[#F4F3F0] md:mx-auto   md:p-24"
    >
      <h1 className="text-6xl font-bold md:text-center">Add Your Product</h1>
      <form onSubmit={handleAddCoffee}>
        <div className="md:flex gap-6">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text"> Name</span>
            </label>
            <input
              type="text"
              placeholder=" Name"
              className="input input-bordered w-3/4 md:w-full"
              name="name"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="text"
              placeholder="Image"
              className="input input-bordered w-3/4 md:w-full"
              name="image"
              required
            />
          </div>
        </div>
        <div className="md:flex gap-6">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <input
              type="text"
              placeholder="Brand Name"
              name="brandName"
              className="input input-bordered w-3/4 md:w-full"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <input
              type="text"
              placeholder="Type"
              name="type"
              className="input input-bordered w-3/4 md:w-full"
              required
            />
          </div>
        </div>
        <div className="md:flex gap-6">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="Price"
              name="price"
              className="input input-bordered w-3/4 md:w-full"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              placeholder="Rating"
              name="rating"
              className="input input-bordered w-3/4 md:w-full"
              required
            />
          </div>
        </div>
        <input
          className="btn mt-6 w-3/4 md:w-full bg-pink-500"
          type="submit"
          value="Add Coffee"
        />
      </form>
    </div>
  );
};

export default AddProduct;
