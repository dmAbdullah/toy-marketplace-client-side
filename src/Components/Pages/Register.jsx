import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Title from "../../Hook/Title";

const Register = () => {
  Title("Register");

  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photo_url.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <h3 className="mt-10 text-center text-3xl font-bold">
        Create an account
      </h3>
      <div className="card w-full max-w-lg shadow-2xl bg-base-100 my-10 mx-auto">
        <div className="card-body">
          <form onSubmit={handleSignUp}>
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
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo url</span>
              </label>
              <input
                type="text"
                name="photo_url"
                placeholder="url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-orange-600 duration-500"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <div className="text-center">
            <Link
              className="underline underline-offset-2 hover:text-orange-600 duration-500"
              to="/login"
            >
              Have an Account ? Please Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
