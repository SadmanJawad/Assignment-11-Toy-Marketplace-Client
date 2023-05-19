import product1 from "../../../assets/gallery/product1.png";
import product2 from "../../../assets/gallery/product2.png";
import product3 from "../../../assets/gallery/product3.png";
import product4 from "../../../assets/gallery/product4.png";
import product5 from "../../../assets/gallery/product5.png";
import product6 from "../../../assets/gallery/product6.png";
import product7 from "../../../assets/gallery/product7.png";
import Marquee from "react-fast-marquee";

const Gallery = () => {
  return (
    <Marquee>
      <div className="container mt-4 mx-auto">
     <div className="flex">
     <h1 className="text-center text-2xl mb-4">Latest Products</h1>
     <p className="text-2xl mx-10">|</p>
        <h1 className="text-center text-2xl mb-4">Latest Products</h1>
        <p className="text-2xl mx-10">|</p>
        <h1 className="text-center text-2xl mb-4">Latest Products</h1>
        <p className="text-2xl mx-10">|</p>
        <h1 className="text-center text-2xl mb-4">Latest Products</h1>
        <p className="text-2xl mx-10">|</p>
        <h1 className="text-center text-2xl mb-4">Latest Products</h1>
        <p className="text-2xl mx-10">|</p>
        <h1 className="text-center text-2xl mb-4">Latest Products</h1>
        <p className="text-2xl mx-10">|</p>

     </div>
        <div className="flex gap-10">
          {/* card 1 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={product1} alt="Shoes" />
            </figure>
          </div>
          {/* card 2 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={product2} alt="Shoes" />
            </figure>
          </div>
          {/* card 3 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={product3} alt="Shoes" />
            </figure>
          </div>
          {/* card 4 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={product4} alt="Shoes" />
            </figure>
          </div>
          {/* card 5 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img  className="h-28" src={product5} alt="Shoes" />
            </figure>
          </div>
          {/* card 6 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="h-28" src={product6} alt="Shoes" />
            </figure>
          </div>
          {/* card 7 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="h-28" src={product7} alt="Shoes" />
            </figure>
          </div>
        </div>
      </div>
    </Marquee>
  );
};

export default Gallery;
