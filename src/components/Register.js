import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import userRegistration from "../utilities/userRegistration";

function Register() {
    const [ formData, setFormData ] = useState({
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    const [registerUserData, setRegisterUserData] = useState({
        status: null,
        message: null,
        errors: null
    });

    const history = useHistory()

    useEffect( () => {
        if (registerUserData.status) {
            history.push('login')
        }
    })

    const [ alertIncomepleteInput, setalertIncomepleteInput ] = React.useState(false);
	const [ alertPasswordMatch, setalertPasswordMatch ] = React.useState(false);
	const [ alertSuccess, setAlertSuccess ] = React.useState(false);

    console.log('registerUserData', registerUserData)

    function handleChange (e) {
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				[e.target.name]: e.target.value
			};
		});
	}

    async function handleRegister (e) {
        e.preventDefault()

        if (!formData.email || !formData.password || !formData.password_confirmation) {
			setalertIncomepleteInput(true);
			if (alertPasswordMatch) {
				setalertPasswordMatch(false);
			}
		} else if (formData.password !== formData.password_confirmation) {
			setalertPasswordMatch(true);
			if (alertIncomepleteInput) {
				setalertIncomepleteInput(false);
			}
		} else {
			setalertIncomepleteInput(false);
			setalertPasswordMatch(false);
            setAlertSuccess(true)
			console.log('logged in');

            const response = await userRegistration({
                username: formData.username,
                email: formData.email,
                password: formData.password,
                password_confirmation: formData.password_confirmation
            })
            console.warn("response", response)
            setRegisterUserData(response)
        }

    }

    return (
        <div className="grid h-screen place-items-center mt-10 mb-10">
            <div>
                <div className="mb-2">
                    <h2 className="flex justify-center text-3xl font-bold pb-3">Create a New Account</h2>
                    <p className="flex justify-center text-lg">Register to submit and retrieve reports.</p>
                </div>
                <div className="w-96 m-auto mt-7">
                    <form onSubmit={handleRegister} method="POST" className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
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
                            onChange={handleChange}
                            value={formData.username}
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
                            onChange={handleChange}
                            value={formData.email}
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
                            onChange={handleChange}
                            value={formData.password}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block mt-3 text-gray-700 text-base font-medium mb-4" htmlFor="password_confirmation">
                                Confirm Password
                            </label>
                            <input
                                className="shadow appearance-none text-base border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                placeholder="Re-enter your password"
                            onChange={handleChange}
                            value={formData.password_confirmation}
                            />
                        </div>
                        <div className="mb-6 flex justify-center text-base">
                            <button
                                className="bg-gray-900 w-full mt-5 transition-all hover:bg-black text-white font-medium py-3 px-6 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Create Account
                            </button>
                        </div>
                        <div className="flex justify-center text-base font-medium">
                            <p>
                                Already have an account?{' '}
                                <span className="text-slate-700 font-bold transition-all hover:text-slate-400">
                                    <Link to="/login">Login here.</Link>
                                </span>
                            </p>
                        </div>

                        {alertIncomepleteInput && (
							<div
								className="bg-red-100 border text-base mt-5 border-red-400 text-red-700 px-4 py-3 rounded relative"
								role="alert"
							>
								<strong className="font-bold">Error! </strong>
								<span className="block sm:inline"> Please accomplish all fields</span>
								<span className="absolute top-0 bottom-0 right-0 px-4 py-3">
									<svg
										className="fill-current h-6 w-6 text-red-500"
										role="button"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
									>
										<title>Close</title>
										<path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
									</svg>
								</span>
							</div>
						)}

                        {alertPasswordMatch && (
							<div
								className="bg-red-100 border text-base mt-5 border-red-400 text-red-700 px-4 py-3 rounded relative"
								role="alert"
							>
								<strong className="font-bold">Error! </strong>
								<span className="block sm:inline"> Passwords do not match</span>
								<span className="absolute top-0 bottom-0 right-0 px-4 py-3">
									<svg
										className="fill-current h-6 w-6 text-red-500"
										role="button"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
									>
										<title>Close</title>
										<path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
									</svg>
								</span>
							</div>
						)}

                        {alertSuccess && (
							<div
								className="bg-green-100 border text-base mt-5 border-green-400 text-green-700 px-4 py-3 rounded relative"
								role="alert"
							>
								<strong className="font-bold">Success! </strong>
								<span className="block sm:inline"> Redirecting you to the login page</span>
								<span className="absolute top-0 bottom-0 right-0 px-4 py-3">
									<svg
										className="fill-current h-6 w-6 text-green-500"
										role="button"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
									>
										<title>Close</title>
										<path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
									</svg>
								</span>
							</div>
						)}
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register