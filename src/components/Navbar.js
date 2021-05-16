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
                Burger Here
                </Link>
                
            
                </section>
              

          </nav>
        </div>
    )
}

export default Navbar
