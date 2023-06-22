import { Link } from "react-router-dom";
import Title from "../../Hook/Title";


const AddToy = () => {
    Title('AddToys')

    const handleAddToy = (event) => {
        event.preventDefault();
        
    }
    return(
        <div>
            <h2 className="text-center mt-10 text-3xl font-bold">Add A Toy</h2>
        <div className="card-body">
          <form onSubmit={handleAddToy} className="grid md:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">image</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="image url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">ratings</span>
              </label>
              <input
                type="number"
                name="ratings"
                placeholder="ratings"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="category"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">manufacturer</span>
              </label>
              <input
                type="text"
                name="manufacturer"
                placeholder="manufacturer"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">material</span>
              </label>
              <input
                type="text"
                name="material"
                placeholder="material"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="quantity"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="description"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-9">
              <input
                className="btn bg-orange-600 duration-500"
                type="submit"
                value="Add A Toy"
              />
            </div>
          </form>
          
        </div>
      </div>
  
)};

export default AddToy;
