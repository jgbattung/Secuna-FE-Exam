import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import verification from "../utilities/verification";

function Verify () {
    const [qrData, setQRData] = useState({qrcode: ''})

    function handleQRChange (e) {
		setQRData((prevFormData) => {
			return {
				...prevFormData,
				[e.target.name]: e.target.value
			};
		});
	}

    console.warn("qrData", qrData)

    return (
        <div className="absolute inset-0 flex justify-center items-center z-10 bg-black opacity-95">
                        <div className="grid h-screen place-items-center">
                            <div>
                                <div className="bg-slate-200 shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
                                <form>
                                <label className="block mt-3 text-gray-700 text-base font-medium mb-4" htmlFor="qrcode">Scan the QR code and enter the 6-digit code below</label>
                                <input className="shadow appearance-none text-base border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                type="number" 
                                id="qrcode" 
                                name="qrcode" 
                                placeholder="enter the code here" 
                                onChange={handleQRChange}
                                value={qrData.qrcode}
                                />
                                <button
                                className="bg-gray-900 w-full mt-5 transition-all hover:bg-black text-white font-medium py-3 px-6 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                                >Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
    )
}

export default Verify