import product1 from "../../../assets/gallery/product1.png";
import product2 from "../../../assets/gallery/product2.png";
import product3 from "../../../assets/gallery/product3.png";
import Marquee from "react-fast-marquee";

const Gallery = () => {
  return (
    <Marquee>
      <div className="container mt-4 mx-auto">
        <h1 className="text-center text-5xl mb-4">Products Gallery</h1>
        <div className="flex">
          {/* card 1 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={product1} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          {/* card 2 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={product2} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          {/* card 3 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={product3} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          {/* card 4 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={product1} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
      </div>
    </Marquee>
  );
};

export default Gallery;
