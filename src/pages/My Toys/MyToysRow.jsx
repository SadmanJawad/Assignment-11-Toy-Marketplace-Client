import { FaEdit,FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyToysRow = ({toy}) => {
    const { _id, pictureUrl, name, sellerName, sellerEmail, subCategory, price, rating, availableQuantity, description } = toy;
    
    const handleDelete = _id => {
       console.log(_id)

       Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        console.log('delete confirmed')
        fetch(`http://localhost:5000/toys/${_id}`, {
            method: "DELETE",
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                Swal.fire({
                    title: "Success!",
                    text: "Toy Deleted Successfully",
                    icon: "success",
                    confirmButtonText: "Ok",
                });
                }
            });
        }else{
            console.log(`delete cancelled`)
        }
      })
    

    }

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
                    <button
                    onClick={()=> handleDelete(_id)} 
                    className="btn btn-sm bg-red-500 border-none"><FaTimes></FaTimes></button>
                </td>
        </tr>
    );
};

export default MyToysRow;