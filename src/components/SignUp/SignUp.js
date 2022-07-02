import { useState } from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { BsFacebook, BsGithub, BsTwitter } from "react-icons/bs";
import { FaYahoo } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);


  const handleEmailChange = (event) => {
    setEmail(event.target.value)
    
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  };
  const handleSubmit = (event) => {
    event.preventDefault()
    createUserWithEmailAndPassword(email, password)
  }

  //google sign
  const handleGoogleSignIn = () => {
    signInWithGoogle(email, password)
    console.log(email, password)
  };

  //navigate
  if(user) {
    navigate('/services')
  }

  
  return (
    <div className="pt-10">
      <div class="w-full max-w-md mx-auto">
        <h2 className="text-gray-900 font-bold pt-4 pb-6 text-4xl">Sign up</h2>
        <form onClick={handleSubmit} class="bg-white shadow-lg rounded px-8 pt-8 pb-8 mb-12">
          <div class="mb-4">
            <label
              class=" text-left block text-gray-700 text-sm font-bold mb-3"
              for="name"
            >
              Enter your name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div class="mb-4">
            <label
              class=" text-left block text-gray-700 text-sm font-bold mb-3"
              for="email"
            >
              Enter your email
            </label>
            <input 
              onChange={handleEmailChange}
              class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div class="mb-6">
            <label
              class=" text-left block text-gray-700 text-sm font-bold mb-3"
              for="password"
            >
              Password
            </label>
            <input
             onChange={handlePasswordChange}
              class="shadow appearance-none border  rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div class="flex items-center justify-between">
            <button 
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign Up
            </button>
            <Link
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              to="/signin"
            >
              already have an account?
            </Link>
          </div>
        </form>
        <div className="or flex items-center justify-between mb-14">
          <button
            onClick={handleGoogleSignIn}
            class="bg-transparent hover:bg-gray-300 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full h-16 w-16 flex items-center justify-center text-3xl"
          >
            <FcGoogle />
          </button>
          <br />
          <button class="bg-transparent hover:bg-gray-300 text-black-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full h-16 w-16 flex items-center justify-center text-3xl">
            <BsGithub />
          </button>
          <br />
          <button class="bg-transparent hover:bg-gray-300 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full h-16 w-16 flex items-center justify-center text-3xl">
            <BsFacebook />
          </button>
          <br />
          <button class="bg-transparent hover:bg-gray-300 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full h-16 w-16 flex items-center justify-center text-3xl">
            <BsTwitter />
          </button>
          <br />
          <button class="bg-transparent hover:bg-gray-300 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full h-16 w-16 flex items-center justify-center text-3xl">
            <FaYahoo />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
