import { Link } from "react-router-dom";

const AllToysRow = ({toy}) => {
    const  { _id, sellerName, name,  subCategory, price, availableQuantity } = toy;
    return (
     
              <tr>
              <td>{sellerName}</td>
              <td>{name}</td>
              <td>{subCategory}</td>
              <td>${price}</td>
              <td>{availableQuantity}</td>
              <td>
                <Link
                to={`/viewDetails/${_id}`}>
                <button className="btn bg-sky-500 border-none rounded-2xl">Details</button>
                </Link>
                </td>
            </tr>
       
    );
};

export default AllToysRow;