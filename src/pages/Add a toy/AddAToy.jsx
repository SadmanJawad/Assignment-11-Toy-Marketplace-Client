import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const AddAToy = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const { user } = useContext(AuthContext);
  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;

    const pictureUrl = form.pictureUrl.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availableQuantity = form.availableQuantity.value;
    const description = form.description.value;

    const newToy = {
      pictureUrl,
      name,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      availableQuantity,
      description,
    };

    console.log(newToy);

    // send data to the server
    fetch("http://localhost:5000/addAToy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toy Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-sky-100 p-12">
      <h2 className="text-4xl font-light text-center mb-5">Add a toy</h2>
      <form onSubmit={handleAddToy}>
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
                readOnly
                defaultValue={user?.displayName}
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
              <span className="label-text">Seller Email</span>
            </label>
            <label className="input-group">
              <input
                readOnly
                type="email"
                name="sellerEmail"
                defaultValue={user?.email}
                placeholder="Seller Email"
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
                name="subCategory"
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
                name="description"
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
                name="pictureUrl"
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
                name="availableQuantity"
                placeholder="Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add a toy"
          className="btn btn-block bg-sky-400 border-none"
        />
      </form>
    </div>
  );
};

export default AddAToy;
