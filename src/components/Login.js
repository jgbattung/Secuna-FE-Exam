import React from "react";
import { Link } from 'react-router-dom';

function Login () {
    return (
        <div className="grid h-screen place-items-center mt-10 mb-10">
            <div>
                <div className="mb-2">
                    <h2 className="flex justify-center text-3xl font-bold pb-3">Login to your account</h2>
                </div>
                <div className="w-96 m-auto mt-7">
                    <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block mt-3 text-gray-700 text-base font-medium mb-4" htmlFor="username">
                                Username
                            </label>
                            <input 
                                className="shadow appearance-none text-base border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                name="username"
                                placeholder="Enter your name"
                                // onChange={}
                                // value=""
                                 />
                        </div>

                        <div className="mb-4">
                            <label className="block mt-3 text-gray-700 text-base font-medium mb-4" htmlFor="email">
                                Email
                            </label>
                            <input 
                                className="shadow appearance-none text-base border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                // onChange={}
                                // value=""
                                 />
                        </div>
                        
                        <div className="mb-4">
                            <label className="block mt-3 text-gray-700 text-base font-medium mb-4" htmlFor="password">
                                Password
                            </label>
                            <input 
                                className="shadow appearance-none text-base border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                // onChange={}
                                // value=""
                                 />
                        </div>

                        <div className="mb-6 flex justify-center text-base">
							<button
								className="bg-gray-900 w-full mt-5 transition-all hover:bg-black text-white font-medium py-3 px-6 rounded focus:outline-none focus:shadow-outline"
								type="submit"
							>
								Login
							</button>
						</div>
                        <div className="flex justify-center text-base font-medium">
							<p>
								Don't have an account?{' '}
								<span className="text-slate-700 font-bold transition-all hover:text-slate-400">
									<Link to="/register">Register here.</Link>
								</span>
							</p>
						</div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login