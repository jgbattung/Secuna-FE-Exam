import React from "react";
import { Link } from 'react-router-dom';


function DefaultPage () {
    return (
        <div className="h-screen w-screen bg-white">
            <div className="grid grid-cols-2 w-full mt-20">
				<div className="ml-40">
					<h1 className="text-white">.</h1>
				</div>
				<div className="flex flex-row-reverse items-center mr-40">
					<Link to="/register">
						<div className="ml-8">
							<button className="text-white bg-slate-800 hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg px-6 py-3 text-center transition-all">
								Register
							</button>
						</div>
					</Link>
					<Link to="/login">
						<div>
							<button className="text-black font-semibold hover:bg-gray-800 hover:text-white px-6 py-3 rounded-lg transition-all">
								Login
							</button>
						</div>
					</Link>
				</div>
			</div>
            <div>
                <h1 className="flex text-teal-800 justify-center items-center mt-44 text-8xl font-black">Secuna FE Exam</h1>
				<h2 className="flex text-black justify-center items-center mt-4 text-xl font-semibold">by Jireh Battung</h2>
            </div>
        </div>
    )
}

export default DefaultPage