import { useEffect, useState } from "react";
import ShopByCategoryCard from "../ShopByCategoryCard/ShopByCategoryCard";

const ShopByCategory = () => {
  // useEffect(() => {

  // },[]);

  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("LegoCity");

  const url = `http://localhost:5000/toySearchByTitle/${activeTab}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [url, activeTab]);

  const handleTab = (categoryName) => {
    setActiveTab(categoryName);
  };

  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm">
        <h2 className="mb-4 text-4xl text-sky-500 tracking-tight font-normal">
          Shop by Category
        </h2>
        <p className="text-xl text-gray-400">
          Explore the whole collection of Lego Toy with just a click.
        </p>
      </div>
      {/* tabs */}
      <div className="my-16">
        <div className="tabs flex justify-center items-center">
          <div
            onClick={() => handleTab("LegoCity")}
            className={`m-2 px-6 py-2 text-lg rounded font-semibold cursor-pointer transition-all duration-300 text-white ${
              activeTab == "LegoCity" ? " bg-sky-800 text-white" : "bg-sky-400"
            }`}
          >
            Lego City
          </div>
          <div
            onClick={() => handleTab("LegoArchitecture")}
            className={`m-2 px-6 py-2 text-lg rounded font-semibold cursor-pointer transition-all duration-300 text-white ${
              activeTab == "LegoArchitecture"
                ? " bg-sky-800 text-white"
                : "bg-sky-400"
            }`}
          >
            Lego Architecture
          </div>
          <div
            onClick={() => handleTab("LegoStarWars")}
            className={`m-2 px-6 py-2 text-lg rounded font-semibold cursor-pointer transition-all duration-300 text-white  ${
              activeTab == "LegoStarWars"
                ? " bg-sky-800 text-white"
                : "bg-sky-400"
            }`}
          >
            Lego Star Wars
          </div>
        </div>
      </div>
      {/* cards */}
      <div  className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
        {toys.map((toy) => (
          <ShopByCategoryCard key={toy._id} toy={toy}></ShopByCategoryCard>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
