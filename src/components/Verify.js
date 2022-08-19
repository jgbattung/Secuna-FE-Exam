import React from "react";
import { useState, useEffect } from "react";
import verification from "../utilities/verification";
import { useHistory } from "react-router-dom";

function Verify () {
    const [qrData, setQRData] = useState({
        code: ''
    })

    const [verifyQRCode, setverifyQRCode] = useState({
        access_token: null,
        type: null,
        errors: null
    });

    
    const history = useHistory()
    
    useEffect( () => {
        if (verifyQRCode.type) {
            history.push('/dashboard')
        }
    })

    console.log("verifyQR", verifyQRCode)

    function handleQRChange (e) {
		setQRData((prevFormData) => {
			return {
				...prevFormData,
				[e.target.name]: e.target.value
			};
		});
	}

    async function handleQRSubmit (e) {
        e.preventDefault()

        const response = await verification({
            code: qrData.code
        })
        setverifyQRCode(response)
        console.warn('response', response)


    }

    console.warn("qrData", qrData.code)

    return (
        <div className="absolute inset-0 flex justify-center items-center z-10 bg-black opacity-95">
                        <div className="grid h-screen place-items-center">
                            <div>
                                <div className="bg-slate-200 shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
                                <form onSubmit={handleQRSubmit} method="POST">
                                <label className="block mt-3 text-gray-700 text-base font-medium mb-4" htmlFor="code">Scan the QR code and enter the 6-digit code below</label>
                                <input className="shadow appearance-none text-base border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="code"
                                type="number" 
                                name="code" 
                                placeholder="enter the code here" 
                                onChange={handleQRChange}
                                value={qrData.code}
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