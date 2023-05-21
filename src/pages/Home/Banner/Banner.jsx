import banner1 from '../../../assets/banner/banner1.jpg'
import banner2 from '../../../assets/banner/banner2.jpg'
import banner3 from '../../../assets/banner/banner3.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner1} className="w-full" />
          <div className="bg-neutral opacity-50 min-h-full w-full absolute object-contain ">
          {" "}
        </div>
          <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
            <div className="space-y-7 pl-12">
              <h2 className="text-5xl text-sky-500 font-light">HAND TOOLS </h2>
              <p className="text-white text-7xl">
                FLAT 75% OFF
              </p>
              <h3 className='text-white text-5xl'>AT $99 FOR TODAY</h3>
              <div>
                <button className="btn btn-wide bg-sky-500">Shop Now</button>
                
              </div>
            </div>
          </div>
  
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-1/2 bottom-0">
            <a href="#slide3" className="btn btn-circle bg-sky-600 border-none mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="w-full" />
          <div className="bg-neutral opacity-50 min-h-full w-full absolute object-contain ">
          {" "}
        </div>
          <div className="absolute flex items-center  h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
            <div className="space-y-7 pl-12">
              <h2 className="text-5xl text-sky-500 font-light">Big fun for kids!</h2>
              <h2 className="text-7xl text-white font-semibold">A world <br /> to explore</h2>
              <p className="text-white text-xl">
              Active toys for smart and active kids. Bring fun and non-stop
                learning for your little ones.
              </p>
              <div>
              <button className="btn btn-wide bg-sky-500">Shop Now</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-1/2 bottom-0">
            <a href="#slide1" className="btn btn-circle bg-sky-600 border-none mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} className="w-full" />
          <div className="bg-neutral opacity-50 min-h-full w-full absolute object-contain ">
          {" "}
        </div>
          <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
            <div className="space-y-7 pl-12">
            <h2 className="text-5xl text-sky-500 font-light">Your wow! store</h2>
              <h2 className="text-7xl text-white font-semibold ">The Ultimate <br />Toy Store</h2>
              <p className="text-white">
              Delivering smile with toys. Get your unbeatable fun and
                    learning experience with our creative toys.
              </p>
              <div>
              <button className="btn btn-wide bg-sky-500">Shop Now</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-1/2 bottom-0">
            <a href="#slide2" className="btn btn-circle bg-sky-600 border-none mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>        


    );
};

export default Banner;