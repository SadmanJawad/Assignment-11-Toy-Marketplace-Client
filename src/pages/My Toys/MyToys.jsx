import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`https://toy-store-server-zeta.vercel.app/mytoys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, [user]);




  return (
    <div>
      {/* <h2>My Toys: {toys.length}</h2> */}

      <div className="overflow-x-auto">
        <table className="table table-compact w-full container mx-auto">
          {/* head */}
          <thead>
            <tr>
              {/* <th>pictureUrl</th> */}
              <th>toyName</th>
              <th>Name</th>
              <th>Email</th>
              <th>subCategory</th>
              <th>price</th>
              <th>rating</th>
              <th>Quantity</th>
              <th>description</th>
              <th>Edit</th>
              <th>Delete</th>
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
