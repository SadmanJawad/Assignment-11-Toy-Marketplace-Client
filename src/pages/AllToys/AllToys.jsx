import { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
  // const [allToys, setAllToys] = useState([]);
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");

  const url = "https://toy-store-server-zeta.vercel.app/toys";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [url]);
  console.log(toys);

  const handleSearch = () => {
    fetch(`https://toy-store-server-zeta.vercel.app/toySearchByTitle/${searchText}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        setToys(data);
        }               
    );
}
  return (
    <div>
      {/* search bar */}
        <div className="text-end container">
      <input
       type="text"
       placeholder="Search"
        className="input input-bordered input-xs w-full max-w-xs mb-4"
        onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch} className="btn btn-xs bg-sky-400 border-none ml-1">Search</button>
      </div>
      {/* search bar end */}

      <h2>All Toys: {toys.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
           { 
                toys.map((toy) => <AllToysRow
                key={toy.id}
                toy={toy}
                ></AllToysRow>
                )

           }
          
        
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
