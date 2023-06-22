import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

const Shop = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://b7a11-toy-marketplace-server-side-dm-abdullah.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  if(
    !toys.length
    
  )
  {
    return <div className="text-center mt-10"><progress className="progress w-56"></progress></div>
  }
  

  return (
    <div className="">
      <div>
        <h2 className="p-5 text-5xl font-bold text-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text mt-10">
          {" "}
          Shop by Category <hr className="border border-orange-400 " />
        </h2>
      </div>
      <div className="btn-group mt-10 flex justify-center">
        <button className="btn">Super Car</button>
        <button className="btn">Classic Car</button>
        <button className="btn">Antique Car</button>
      </div>

      <div className="px-10 grid md:grid-cols-3">
        {toys.map((toy) => (
          <ToyCard key={toy._id} toy={toy}></ToyCard>
        ))}
      </div>
    </div>
  );
};

export default Shop;
