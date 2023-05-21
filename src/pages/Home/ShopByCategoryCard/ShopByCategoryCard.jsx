
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
const ShopByCategoryCard = ({toy}) => {
    const { _id,  name, price, availableQuantity,pictureUrl,rating } = toy;
            
    return (
        <div className=''>
      <div className="card card-compact bg-base-100 shadow-xl ">
        <figure><img className='h-40' src={pictureUrl} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="text-center text-xl font-semibold">{name}</h2>
          <p className='text-lg'>Price: ${price}</p>
          <p className='text-lg'>Quantity:{availableQuantity}</p>
          <p>
            <Rating className='text-yellow-500 text-xl'
              placeholderRating={rating}
              readonly
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar />}
              fullSymbol={<FaStar />}
            />
          </p>
          <Link  to={`/viewDetails/${_id}`}><button className='w-2/4 mx-auto'>
      View Details
    </button></Link>
   
        </div>
      </div>
    </div>
    );
};

export default ShopByCategoryCard;