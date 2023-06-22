import { Link, useLoaderData } from "react-router-dom";
import Title from "../../Hook/Title";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaChevronRight } from "react-icons/fa";


const ToyDetails = () => {
  Title("ToyDetails");

  const toyDetails = useLoaderData();
  console.log(toyDetails);

  const {
    name,
    price,
    image,
    ratings,
    category,
    manufacturer,
    material,
    quantity,
    description,
  } = toyDetails;
  return (
    <div>
      <div className="md:flex gap-5 items-center shadow-xl bg-[#cc8a0e15]">
        <img className="" src={image} alt="" />
        <div className=" py-3 sm:px-10">
          <p className="font-bold text-2xl">{name}</p> <hr />
          <p className="font-bold text-lg">{category}</p>
          <p className="font-bold text-lg">$ {price}</p>
          {<Rating style={{ maxWidth: 120 }} value={ratings} readOnly />}
          <hr />
         <div>
         <p className="text-lg">Manufacturer: {manufacturer}</p>
          <p className="text-lg">Material: {material}</p>
          <p className="text-lg">Available Quantity: {quantity} pcs</p>
          <hr />
         </div>
        </div>
      </div>
      <div className="px-10 py-3 shadow-lg">
        <h2 className="text-2xl font-semibold">Description</h2> <hr />
        <p className="">{description}</p>
      </div>
<div className="text-center my-5">
      <Link
                to="/"
                className="bg-orange-600 p-3 rounded-lg inline-flex  items-center m gap-2 hover:bg-black hover:text-white duration-500 font-medium mt-2"
              >
                Back to Home <FaChevronRight />
              </Link>
</div>
    </div>
  );
};

export default ToyDetails;
