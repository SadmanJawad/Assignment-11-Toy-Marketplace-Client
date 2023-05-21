import { FaEdit,FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyToysRow = ({toy}) => {
    const { _id, pictureUrl, name, sellerName, sellerEmail, subCategory, price, rating, availableQuantity, description } = toy;
    


    return (
        <tr>
                <td>{pictureUrl} </td>
                <td>{name}</td>
                <td>{sellerName}</td>
                <td>{sellerEmail}</td>
                <td>{subCategory}</td>
                <td>{price}</td>
                <td>{rating}</td>
                <td>{availableQuantity}</td>
                <td>{description}</td>
                <td>
                    <Link to={`/update-my-toys/${_id}`} className="btn btn-sm bg-sky-400 border-none"><FaEdit></FaEdit></Link>
                    
                </td>
                <td>
                    <button className="btn btn-sm bg-red-500 border-none"><FaTimes></FaTimes></button>
                </td>
        </tr>
    );
};

export default MyToysRow;