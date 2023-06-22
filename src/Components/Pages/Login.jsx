import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import Title from "../../Hook/Title";



const Login = () => {
  Title('Login')
const [error, setError] = useState('');
const [success, setSuccess] = useState('');
const {signIn}= useContext(AuthContext)
const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form= event.target;
    const email= form.email.value;
    const password= form.password.value;
    // const user= {email, password}
    console.log(email, password);
    signIn(email, password)
    .then(result=> {
      const user= result.user;
      setError('');
      setSuccess("Login SuccessFull")
      navigate("/");
    })
    .catch(error=> setError(error.message))
  };
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  
  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, provider)
    .then(result=>{
      const user= result.user;
      setError('');
      setSuccess("Login SuccessFull")
      navigate("/");
    })
    .catch (error=> {
      setError(error.message);
    })
    
  };

  return (
    <div>
      <h3 className="mt-10 text-center text-3xl font-bold">
        Log in to your account
      </h3>
      <div className="card w-full max-w-lg shadow-2xl bg-base-100 my-10 mx-auto">
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
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
              />
            </div>
            <span className="hover:text-red-600 hover:underline duration-500">
              Forgot Password?
            </span>
            <p className="text-red-600">{error}</p>
            <p className="text-green-600">{success}</p>
            <div className="form-control mt-6">
              <input
                className="btn bg-orange-600 duration-500"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <div className="text-center">
            <Link
              className="underline underline-offset-2 hover:text-orange-600 duration-500"
              to="/register"
            >
              No Account ? Create One Here
            </Link>
            <hr />
            <div>
              Or Log-in With Google
              <Link onClick={handleGoogleSignIn} className="text-2xl flex justify-center mt-2 hover:text-orange-600 duration-500">
                <FaGoogle />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
