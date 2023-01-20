import React from "react";
import Link from "next/link";
 
function Herosection() {
	return (
		<div className="bg-black pt-4 pb-4 text-center">
			<h1 className=" font-bold text-white">
				Peak Institute of Technology
			</h1>
			<h5 className="text-white">
				Contact Us
			</h5>
			
			<Link href="/">
				<h5 className="text-white">
					Call : +260960334954
				</h5>
			</Link>
			<Link href="/">
				<h5 className="text-white">
					Email : kimotezoko@gmail.com
				</h5>
			</Link>
			<h5 className="text-white pb-10">
				You Can Find Us On:
			</h5>
			<h5 className="text-white">
				Since@2022
			</h5>
		</div>
	);
}

export default Herosection;
