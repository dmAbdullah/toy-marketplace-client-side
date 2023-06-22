import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from "react-router-dom";

const ToyCard = ({toy}) => {
    const {_id, category, name, ratings, image, price}= toy;
    
    return (
        <div className="card md:w-96 bg-base-100 shadow-xl mt-5 gap-5">
  <figure className="px-10 pt-10">
    <img src={image} alt="" className="rounded-xl md:w-auto md:h-72 object-cover" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="text-orange-500">{category}</h2>
    <p className="card-title">{name}</p>
    <p className="card-title">$ {price}</p>
   {<Rating style={{ maxWidth: 120 }} value={ratings} readOnly/>}
    <div className="card-actions">
      <Link to={`/toyDetails/${_id}`}  className="bg-orange-600 p-3 rounded-lg inline-flex items-center gap-2 hover:bg-black duration-500 font-medium hover:text-white">Details<FaLongArrowAltRight/></Link>
    </div>
  </div>
</div>
    );
};

export default ToyCard;