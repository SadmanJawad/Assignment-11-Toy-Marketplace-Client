// import { useLoaderData, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewDetails = () => {
    const [details, setDetails] = useState({});
    const  { sellerName, name, price, availableQuantity,pictureUrl,sellerEmail,rating ,description } = details;

  const {id} = useParams();

  useEffect(() => {
    fetch(`https://toy-store-server-zeta.vercel.app/filteredToys/${id}`)   
    .then(res => res.json())
    .then(data => setDetails(data))  
  },[id])

 

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mx-auto mb-12">
        <figure>
          <img
            src={pictureUrl}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Toy Name: {name}</h2>
          <p>Seller Name : {sellerName}</p>
          <p>Seller Email : {sellerEmail}</p>
          <p>Price: ${price}</p>
          <p>Rating: {rating}</p>
          <p>Available Quantity: {availableQuantity} </p>
          <p>Description: {description} </p>
          
        </div>
      <Link to='/' ><button className="btn bg-sky-500">Back to home</button> </Link> 
      </div>
    </div>
  );
};

export default ViewDetails;
