import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import ShopByCategoryCard from '../ShopByCategoryCard/ShopByCategoryCard';
import Aos from 'aos';
import 'aos/dist/aos.css';


const ShopByCategory = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);
  const categories = ['Lego City', 'Lego Star Wars', 'lego cars'];
  const [activeCategory, setActiveCategory] = useState('');
  const [toys, setToys] = useState([]);

  useEffect(() => {
    setActiveCategory(categories[0] || '');
    fetchToys(categories[0]);
  }, []);

  const fetchToys = async (category) => {
    try {
      const response = await fetch(`https://toy-store-server-zeta.vercel.app/toys/tabs/${category}`);
      const data = await response.json();
      setToys(data);
    } catch (error) {
      console.error('Error fetching toys by sub-category:', error);
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    fetchToys(category);
  };

  return (
    <div className="mb-32" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-10 mt-5 text-center">Shop by Category</h2>
      <div className=" py-8 px-4 w-5/6 mx-auto rounded-xl">
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`bg-black px-4 py-2 rounded-lg ${activeCategory === category ? 'bg-blue-400 text-white outline-1' : 'bg-gray-300 text-gray-700'
                }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 mx-auto" data-aos="fade-right">
          {toys.map((toy) => (
                <ShopByCategoryCard
                key={toy._id}
                toy={toy}
                ></ShopByCategoryCard>

          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;