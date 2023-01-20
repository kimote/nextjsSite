import React from "react";
import Link from "next/link";
import logo from '../public/images/logo.png';


function Learnmore() {
	return (
		<div className="text-center bg-red-600 pl-20 pr-20 text-white"> 
            <h2 className="text-3xl font-bold pt-5">Learn More...</h2>
            <h5 className="text-2xl pb-4">PEAK Tech welcomes you to our community of people who discover,create, and solve. Apply today and start learning.</h5>
            <div className='max-w-[1110px] m-auto h-1100'>
        <form className='max-w-[400px] m-auto'>
            <button className='rounded border shadow-lg p-3 w-full my-2 bg-white'><h3 className="text-center text-black font-bold">Request Info</h3></button>
            <button className='rounded border shadow-lg p-3 w-full my-2 bg-white' ><h3 className="text-center text-black font-bold">Login</h3></button>
            <button className='rounded border shadow-lg p-3 w-full my-2 bg-white'><h3 className="text-center text-black font-bold">Apply</h3></button>
        </form>
        
    </div>

		</div>
	);
}

export default Learnmore;
