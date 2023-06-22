import { Link } from "react-router-dom";
import Title from "../../Hook/Title";
import { FaChevronRight } from "react-icons/fa";


const Error = () => {
    Title('Error')
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1684558384~exp=1684558984~hmac=913a5bd04744f5e58b62884ba9034124e1ba76328f0d1a73366f276e131b7385")` }}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md mt-40">
      <h1 className="mb-5 text-5xl font-bold text-white bg-gray-600 p-5 hover:rounded-3xl duration-700 hover:bg-orange-500 hover:text-black">Page not Found</h1>
       <Link className="bg-orange-600 p-3  text-black rounded-lg inline-flex items-center gap-2 hover:bg-black duration-500 font-medium hover:text-white">Back to Home <FaChevronRight/></Link>
    </div>
  </div>
</div>
    );
};

export default Error;