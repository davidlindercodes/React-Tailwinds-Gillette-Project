import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav class="flex relative justify-between p-4"> 
                <section >
                <Link to="/" className='ml-4 font-extrabold text-4xl tracking-tight'>
                gillette. 
                </Link>
                </section>

                <section className="pt-3 hidden sm:block">
                <Link to="/" className='ml-4 mr-4 tracking-tight'>
                Features
                </Link>
                <Link to="/" className='ml-4 mr-4 tracking-tight'>
                Why gillette
                </Link>
                <Link to="/" className='ml-4 mr-4 tracking-tight'>
                Pricing
                </Link>

                <Link to="/" className='bg-black text-white pl-6 pr-6 pt-3 pb-3 rounded ml-4 mr-4  text-m tracking-tight'>
                Sign Up
                </Link>

                </section>

                <section className="pt-3 block sm:hidden">
                <Link to="/" className='ml-4 mr-4 tracking-tight'>
            <svg 
                    class="w-9 h-9 fixed top-5 right-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg">
                        
                <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                </path>
            </svg>
                </Link>
                
            
                </section>
              

          </nav>
        </div>
    )
}

export default Navbar
