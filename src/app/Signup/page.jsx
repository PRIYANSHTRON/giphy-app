"use client"

import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from '../../../firebase';




function Signup() {
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const togglePasswordVisibility1 = () => {
        setShowPassword1(!showPassword1);
    };

    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
    };

    const [email, setEmail] = useState("");
    const [passwordOne, setPasswordOne] = useState("");
    const [passwordTwo, setPasswordTwo] = useState("");
    const router = useRouter();
    const [error, setError] = useState(null);

    const onSubmit = event => {
        event.preventDefault();
        setError(null)
        //check if passwords match. If they do, create user in Firebase
        // and redirect to your logged in page.
        if (passwordOne === passwordTwo)
            createUserWithEmailAndPassword(auth, email, passwordOne)
                .then(authUser => {
                    console.log("Success. The user is created in Firebase")
                    router.push("/Main");
                })
                .catch(error => {
                    // An error occurred. Set error message to be displayed to user
                    setError(error.message)
                });
        else
            setError("Password do not match")
    };



    return (
        <form onSubmit={onSubmit}>
            {error ? error :
                <div className='bg-gray-100 flex items-center justify-center h-screen'>
                    <div className="bg-white border-black border-2 border-dashed rounded-md px-8 pt-6 pb-8 mb-4">
                        <h2 className="text-2xl mb-4 text-center">Sign Up</h2>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="border-black  border-dashed border-1 appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-black  border-dashed-outline"
                                id="signup-email" type="email" placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                name='email'
        
                            />
                        </div>

                        <div className="mb-6 relative">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <div className="flex items-center border-black border-dashed border rounded w-full py-2 px-3">
                                <input
                                    className="appearance-none w-full text-gray-700 mr-3  px-2 leading-tight focus:outline-none border-none"
                                    type={showPassword1 ? 'text' : 'password'} placeholder="Password"
                                    onChange={(e) => setPasswordOne(e.target.value)}
                                    value={passwordOne}
                                />
                                <button
                                    onClick={togglePasswordVisibility1}
                                >
                                    {showPassword1 ? <FaRegEyeSlash /> : <FaRegEye />}
                                </button>
                                <label htmlFor="passwordToggle" className="text-sm text-gray-700 cursor-pointer">

                                </label>
                            </div>
                        </div>

                        <div className="mb-6 relative">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <div className="flex items-center border-black border-dashed border rounded w-full py-2 px-3">
                                <input
                                    className="appearance-none w-full text-gray-700 mr-3  px-2 leading-tight focus:outline-none border-none"
                                    type={showPassword2 ? 'text' : 'password'} placeholder="Password"
                                    onChange={(e) => setPasswordTwo(e.target.value)}
                                    value={passwordTwo}
                                />
                                <button
                                    onClick={togglePasswordVisibility2}
                                >
                                    {showPassword2 ? <FaRegEyeSlash /> : <FaRegEye />}
                                </button>
                                <label htmlFor="passwordToggle" className="text-sm text-gray-700 cursor-pointer">

                                </label>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <button className="border-blue-700  border-[2px] border-dashed hover:scale-90 text-blue-700 font-bold py-2 px-4 rounded active:text-white active:bg-blue-700"
                                type="button"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            }
        </form>
    )
}

export default Signup