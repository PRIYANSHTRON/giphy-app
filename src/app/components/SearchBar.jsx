"use client"
import React from 'react'
import { IoSearch } from "react-icons/io5";

import { useRouter } from 'next/navigation';

import { signOut } from "firebase/auth";
import { auth } from '../../../firebase';


function SearchBar() {
    const router = useRouter();

    const handleLogout = async () => {
        try {
        await signOut(auth);
        console.log("Signed out successfully");
        router.push('/Signup') // Redirect to the home page (or any other desired path)
        } catch (error) {
        // Handle sign-out error
        console.error("Error signing out:", error);
        // Display an error message to the user if needed
        }
        };
    return (
        <div className=''>
            <div className='flex w-[600px] gap-5 border-2 border-black border-dashed p-4 justify-center rounded-md m-6'>
                <div className='p-2 w-[80%] border-black border border-dashed rounded-full flex items-center'>
                    <IoSearch />
                    <input type="text" placeholder='Enter name of any GIF' className='px-2 outline-none'/>
                </div>
                <button className='max-w-[20%] border bg-blue-700 text-white px-3 py-2 rounded-md active:scale-95'>Search</button>
                <button onClick={handleLogout} className='max-w-[20%] border bg-gray-500 text-white px-3 py-2 rounded-md active:scale-95'>Logout</button>


            </div>
        </div>
    )
}

export default SearchBar