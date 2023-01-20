import React from "react";
import Link from "next/link";
import logo from '../public/images/logo.png';


function Industry() {
	return (
		<div className="text-center justify-center pl-10 pr-10"> 
            <img className='rounded-t-lg justify-center m-auto pb-4' 
                src={'logo.png'}
                width = {60}
                height = {60}
            />
            <h2 className="text-3xl font-bold">Industry Certification</h2>
            <h5 className="text-2xl">Our courses are best suited for school leavers, graduates with the interest of joining the oil marketing industry as well as refresher courses. </h5>
		</div>
	);
}

export default Industry;
