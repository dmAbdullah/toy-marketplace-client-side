import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="carousel w-full h-[500px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-photo/full-shot-woman-talking-baby_23-2149320499.jpg?w=740&t=st=1684388223~exp=1684388823~hmac=728f688b6f59f7b73e6c21f9082b97d5ab6712689da14bd27f75bf29284d3624" className="w-full object-cover" />
    <div className="absolute justify-between  transform -translate-y-1/2 left-0 right-5 top-1/2 bg-gradient-to-r from-[#ffe9d055] to-[rgba(21, 21, 21, 0) 100%)] flex items-center w-full h-full">
        <div className="text-white w-2/3 p-10">
            <p className="uppercase text-2xl text-black">Big sell this week</p>
            <h2 className="uppercase text-5xl font-extrabold my-5 bg-gradient-to-r from-green-500 via-blue-500 to-green-500 text-transparent bg-clip-text">extra 10%</h2>
            <h4 className="text-3xl mb-5 text-black">Off All Discounted Toys</h4>
            <Link to='' className="bg-orange-600 p-3 rounded-lg inline-flex items-center gap-2 hover:bg-black duration-500 font-medium">Shop Now <FaChevronRight/></Link>
        </div>
      
      <a href="#slide3" className="btn btn-circle opacity-30 hover:opacity-40">❮</a> 
      <a href="#slide2" className="btn btn-circle opacity-30 hover:opacity-40">❯</a>
      
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <img src="https://img.freepik.com/free-photo/girl-with-ponytails-playing-with-toy_23-2147663659.jpg?w=740&t=st=1684388253~exp=1684388853~hmac=a6cd8a89e4f6dfb4e5a8f3a85ed7818029343286ba7577b0f75961c6ad391230" className="w-full object-cover" />
  <div className="absolute justify-between  transform -translate-y-1/2 left-0 right-5 top-1/2 bg-gradient-to-r from-[#ffe9d055] to-[rgba(21, 21, 21, 0) 100%)] flex items-center w-full h-full">
        <div className="text-white w-2/3 p-10">
            <p className="uppercase text-2xl text-black">Big sell this week</p>
            <h2 className="uppercase text-5xl font-extrabold my-5 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">extra 10%</h2>
            <h4 className="text-3xl mb-5 text-black">Off All Discounted Toys</h4>
            <Link to='' className="bg-orange-600 p-3 rounded-lg inline-flex items-center gap-2 hover:bg-black duration-500 font-medium">Shop Now <FaChevronRight/></Link>
        </div>
      <a href="#slide1" className="btn btn-circle opacity-30 hover:opacity-40">❮</a> 
      <a href="#slide3" className="btn btn-circle opacity-30 hover:opacity-40">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <img src="https://img.freepik.com/free-photo/full-shot-mother-kid-with-nice-toys_23-2149307014.jpg?w=740&t=st=1684388495~exp=1684389095~hmac=6e580842e48ccee00e418604002fe84efad5ac71d701c443353b5a0ddfb1e1d5" className="w-full object-cover" />
  <div className="absolute justify-between  transform -translate-y-1/2 left-0 right-5 top-1/2 bg-gradient-to-r from-[#8b8a8855] to-[rgba(21, 21, 21, 0) 100%)] flex items-center w-full h-full">
        <div className="text-white w-2/3 p-10">
            <p className="uppercase text-2xl text-black">Big sell this week</p>
            <h2 className="uppercase text-5xl font-extrabold my-5 bg-gradient-to-r from-orange-600 via-pink-500 to-orange-600 text-transparent bg-clip-text">extra 10%</h2>
            <h4 className="text-3xl mb-5 text-black">Off All Discounted Toys</h4>
            <Link to='' className="bg-orange-600 p-3 rounded-lg inline-flex items-center gap-2 hover:bg-black duration-500 font-medium">Shop Now <FaChevronRight/></Link> 
        </div>
      <a href="#slide2" className="btn btn-circle opacity-30 hover:opacity-40">❮</a> 
      <a href="#slide1" className="btn btn-circle opacity-30 hover:opacity-40">❯</a>
    </div>
  </div> 
</div>
    );
};

export default Banner;