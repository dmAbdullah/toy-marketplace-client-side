import { Link } from "react-router-dom";
import Title from "../../Hook/Title";
import { useEffect, useState } from "react";
import TableData from "./TableData";

const AllToys = () => {
    Title('AllToys')

    const [allToys, setAllToys] = useState([]);

    useEffect(() => {
      fetch("https://b7a11-toy-marketplace-server-side-dm-abdullah.vercel.app/toys")
        .then((res) => res.json())
        .then((data) => setAllToys(data));
    }, []);
    if(
      !allToys.length
      
    )
    {
      return <div className="text-center mt-10"><progress className="progress w-56"></progress></div>
    }

    return (

        <div className="overflow-x-auto w-full my-10">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Toy Name</th>
        <th>Sub-category</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th>Details</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
{
    allToys.map(toys=><TableData key={toys._id} toys={toys}></TableData>)
}      
    </tbody>    
  </table>
</div>
    );
};

export default AllToys;