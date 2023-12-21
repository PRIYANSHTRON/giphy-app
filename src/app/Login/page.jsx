"use client"
import React, { useState } from 'react';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase';



function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const router = useRouter();
  const [error, setError] = useState(null);

  const onSubmit = event => {
    setError(null)
    event.preventDefault();
    if (!email || !passwordOne) {
      setError("Email and Password are required");
      return;
    }
      signInWithEmailAndPassword(auth, email, passwordOne)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("Success. The user logged in Successfully.")
          router.push("/Main");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
  };


  return (
    <form onSubmit={onSubmit}>
      { error? error : 
      <div className='bg-gray-100 flex items-center justify-center h-screen'>
      <div className="bg-white border-black border-2 border-dashed rounded-md px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl mb-4 text-center">Login</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="border-black border-dashed border-1 appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-black border-dashed-outline"
            id="email" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}
            value={email}
            name='email' />
        </div>

        <div className="mb-6 relative">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <div className="flex items-center border-black border-dashed border rounded w-full py-2 px-3">
            <input
              className="appearance-none w-full text-gray-700 mr-3  px-2 leading-tight focus:outline-none border-none"
              type={showPassword ? 'text' : 'password'} placeholder="Password"
              onChange={(e) => setPasswordOne(e.target.value)}
              value={passwordOne}
            />
            <button
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
            <label htmlFor="passwordToggle" className="text-sm text-gray-700 cursor-pointer">

            </label>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button className="border-blue-700 border-[2px] border-dashed hover:scale-90 text-blue-700 font-bold py-2 px-4 rounded active:text-white active:bg-blue-700"
            type="submit">
            Login
          </button>
        </div>
      </div>
    </div>  
  }
    </form>
    
  );
}

export default Login;
