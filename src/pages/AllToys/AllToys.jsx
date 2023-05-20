import { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);

  const url = "https://toy-store-server-zeta.vercel.app/toys";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, [url]);

  console.log(allToys);
  return (
    <div>
      <h2>All Toys: {allToys.length}</h2>
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
                allToys.map((toy) => <AllToysRow
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
