import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/mytoys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, [user]);

  return (
    <div >
      <h2>My Toys: {toys.length}</h2>
      <div className="text-center">
      <input
       type="text"
       placeholder="Search here"
        className="input input-bordered input-xs w-full max-w-xs mb-4"
        onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="btn btn-xs bg-sky-500 border-none ml-1">Search</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-compact w-full container mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th>pictureUrl</th>
              <th>Toy name</th>
              <th>Name</th>
              <th>Email</th>
              <th>sub Category</th>
              <th>price</th>
              <th>rating</th>
              <th>Quantity</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
                {
                    toys.map((toy) => <MyToysRow
                    key={toy._id}
                    toy={toy}
                    ></MyToysRow>
                    )
                }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
