import { Link } from 'react-router-dom';
import companyLogo from '../../../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)
    const handleLogout = () => {
      logOut();
    };

    return (
      <div>
<nav className="bg-sky-300 border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link to='/' className="flex items-center">
            <img src={companyLogo} className="w-16 h-16" alt="Logo" />
            <span className="self-center text-3xl mt-1 ml-2 font-bold whitespace-nowrap text-white dark:text-white">Toytopia</span>
        </Link>
    <div>
      <input type="text" placeholder="Search" className="input input-bordered" />
       </div>
        <div className="flex items-center">
         <p href="tel:5541251234" className="mr-2 text-md  text-white dark:text-white">Welcome to Toytopia</p>
            <span className='mr-2 ml-2 text-white'>|</span>
            {user && 
          <li className="tooltip tooltip-bottom" 
          data-tip={user.displayName ?  user.displayName : 'User name unavailable'}
          >
              <Link
              to='/user-profile'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
              >
              {
                user.photoURL ?   <img className="rounded-full w-10 h-10" src={user?.photoURL} alt="" /> :
                <FaUser></FaUser>
              }
              </Link>

                    </li>}
          
            {user ? (
                <Link
                onClick={handleLogout}
                className="ml-2 text-md  text-white dark:text-blue-500 hover:underline"
                >Logout
                </Link>
            ) : (
                <Link to='/login' className="ml-2 text-md  text-white dark:text-blue-500 hover:underline">Login</Link>
            )}
        </div>
    </div>
</nav>
<nav className="bg-gray-50 dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
            <ul className="flex flex-row font-extralight mt-0 mr-6 space-x-8 text-md ml-96">
        <li>
            <Link to='/' className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
        </li>
        <li>
            <Link to='/allToys' className="text-gray-900 dark:text-white hover:underline">All Toys</Link>
        </li>
        <li>
            <Link to='/myToys' className="text-gray-900 dark:text-white hover:underline">My Toys</Link>
        </li>
        <li>
            <Link to='/add-a-toy' className="text-gray-900 dark:text-white hover:underline">Add a toy</Link>
        </li>
        <li>
            <a href="#" className="text-gray-900 dark:text-white hover:underline">Blogs</a>
        </li>
        <li>
            <a href="#" className="text-gray-900 dark:text-white hover:underline">Contact Us</a>
        </li>
            </ul>
        </div>
    </div>
</nav>
</div>
    );
};

export default Navbar;