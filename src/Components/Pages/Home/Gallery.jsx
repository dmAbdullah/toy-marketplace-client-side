import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import Shop from "./Shop";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Gallery = () => {
  const handleSubmit=()=>{
    toast("Join newsletter successfully!")
  }
  return (
    <div className="my-10">
      <h2
        className="p-3 text-5xl font-bold text-center mt-10
        bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text"
      >
        Early Black Friday Specials <hr />
      </h2>

      <div className="grid md:grid-cols-3 grid-cols-1 items-center gap-5">
        <div className="relative w-full mt-10">
          <img
            src="https://images.unsplash.com/photo-1590504263777-ee53135bdbdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=741&q=80"
            className="w-full h-80 rounded-2xl object-cover"
          />
          <div className="absolute justify-between transform -translate-y-1/2 left-0 right-5 top-1/2 flex items-center w-full h-full rounded-2xl">
            <div className="text-white absolute top-0 w-2/3 p-10">
              <p className="uppercase ">Wooden car</p>
              <h2 className="font-semibold">ORIGINAL PRICE $25.00</h2>
              <p className="text-2xl mb-28">$15.99</p>
              <Link
                to=""
                className="bg-orange-600 p-3 rounded-lg inline-flex items-center m gap-2 hover:bg-black duration-500 font-medium mt-2"
              >
                Shop Now <FaChevronRight />
              </Link>
            </div>
          </div>
        </div>

        <div className="relative w-full mt-10">
          <img
            src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
            className="w-full h-96 rounded-2xl object-cover"
          />
          <div className="absolute justify-between transform -translate-y-1/2 left-0 right-5 top-1/2 flex items-center w-full h-full rounded-2xl">
            <div className="text-white absolute top-0 w-2/3 p-10">
              <p className="uppercase ">Taxi Car</p>
              <h2 className="font-semibold">ORIGINAL PRICE $25.00</h2>
              <p className="text-2xl mb-44">$15.99</p>
              <Link
                to=""
                className="bg-orange-600 p-3 rounded-lg inline-flex items-center m gap-2 hover:bg-black duration-500 font-medium mt-2"
              >
                Shop Now <FaChevronRight />
              </Link>
            </div>
          </div>
        </div>

        <div className="relative w-full mt-10">
          <img
            src="https://images.unsplash.com/photo-1572635196184-84e35138cf62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
            className="w-full h-80 rounded-2xl object-cover"
          />
          <div className="absolute justify-between transform -translate-y-1/2 left-0 right-0 top-1/2 flex items-center w-full h-full rounded-2xl">
            <div className="text-white absolute top-0 w-2/3 p-10">
              <p className="uppercase ">Classic car</p>
              <h2 className="font-semibold">ORIGINAL PRICE $25.00</h2>
              <p className="text-2xl mb-28">$15.99</p>
              <Link
                to=""
                className="bg-orange-600 p-3 rounded-lg inline-flex items-center m gap-2 hover:bg-black duration-500 font-medium mt-2"
              >
                Shop Now <FaChevronRight />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Shop></Shop>

      {/* Gallery */}
      <div>
        <h2
          className="p-5 text-5xl font-bold text-center hover:text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 duration-700 mt-10
        "
        >
          {" "}
          <hr className="border border-orange-400" /> Gallery{" "}
          <hr className="border border-orange-400" />
        </h2>
        <div>
          <div className="carousel w-full mt-10">
            <div id="item1" className="carousel-item w-full">
              <img
                src="https://images.pexels.com/photos/69359/pexels-photo-69359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="object-cover h-96 w-full mx-auto rounded-lg"
              />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img
                src="https://images.pexels.com/photos/760979/pexels-photo-760979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="object-cover h-96 w-full mx-auto rounded-lg"
              />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img
                src="https://images.pexels.com/photos/249343/pexels-photo-249343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="object-cover h-96 w-full mx-auto rounded-lg"
              />
            </div>
            <div id="item4" className="carousel-item w-full">
              <img
                src="https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="object-cover h-96 w-full mx-auto rounded-lg"
              />
            </div>
            <div id="item5" className="carousel-item w-full">
              <img
                src="https://images.pexels.com/photos/35619/capri-ford-oldtimer-automotive.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="object-cover h-96 w-full mx-auto rounded-lg"
              />
            </div>
            <div id="item6" className="carousel-item w-full">
              <img
                src="https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="object-cover h-96 w-full mx-auto rounded-lg"
              />
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
            <a href="#item4" className="btn btn-xs">
              4
            </a>
            <a href="#item5" className="btn btn-xs">
              5
            </a>
            <a href="#item6" className="btn btn-xs">
              6
            </a>
          </div>
        </div>
      </div>

      <div>
        <div
          className="hero mt-10"
          style={{
            backgroundImage: `url("https://img.freepik.com/free-vector/flat-background-autumn_23-2149555593.jpg?w=740&t=st=1684571960~exp=1684572560~hmac=7a37943a87bbeb3661bdb38b09285003e9fc1bfc74ab848c548d15fa2a2a2301")`,
          }}
        >
          <div className="hero-overlay bg-opacity-40"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-xl p-5">
              <p className=" font-mono font-bold text-3xl text-center ">
                Join our newsletter and get $20 discount for your first order
              </p>

              <div className="form-control p-5 text-black">
                <label className="input-group">
                  <span className="font-semibold" onClick={handleSubmit}>Subscribe</span>
                  <input
                    type="text" 
                    placeholder="email@mail.com"
                    className="input input-bordered w-full" required
                  />
                </label>
              </div>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
