import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Swal from "sweetalert2";

const AddAToy = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const sellerName = form.sellerName.value;
    const rating = form.rating.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const email = form.email.value;

    const newCoffee = {
      name,
      quantity,
      sellerName,
      rating,
      category,
      details,
      photo,
      email,
    };

    console.log(newCoffee);

    // send data to the server
    fetch("https://toy-store-server-zeta.vercel.app/addAToy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-sky-100 p-12">
      <h2 className="text-4xl font-light text-center mb-5">Add a toy</h2>
      <form onSubmit={handleAddCoffee}>
        {/* form toy name and seller name */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Toy Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="sellerName"
                placeholder="Seller Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form rating and Email row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="rating"
                placeholder="Toy Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* form category and details row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <div className="mt-3">
              <label htmlFor="dropdown">Subcategory</label>
              <input
                type="text"
                name="category"
               placeholder="Choose toy category"
                data-dropdown-toggle="dropdown"
                className="input input-bordered w-full"
                id="inputField"
                value={selectedOption}
              ></input>

              <select
              className="-ml-44"
              required
                id="dropdown"
                value={selectedOption}
                onChange={handleDropdownChange}
              >
                <option value="">Select an option</option>
                <option value="lego city">lego city</option>
                <option value="lego architecture">lego architecture</option>
                <option value="lego cars">lego cars</option>
                <option value="lego star wars">lego star wars</option>
              </select>
            </div>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form Photo url & email row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
       
        </div>
        {/* form price & quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="$"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="quantity"
                name="quantity"
                placeholder="Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add a toy" className="btn btn-block bg-sky-400 border-none" />
      </form>
    </div>
  );
};

export default AddAToy;
