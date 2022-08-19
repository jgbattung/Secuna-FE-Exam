import React from "react";
import { useState, useEffect } from "react";
import submitReport from "../utilities/submitReport";
// import { useHistory } from "react-router-dom";

function Dashboard () {
    const [ reportData, setReportData ] = useState({
        vulnerability_type: '',
        severity_level: '',
        title: '',
        description: ''
    });

    console.log("reportData", reportData)

    const [ submitReportData, setSubmitReportData ] = useState({
        message: null,
        errors: null,
        reports: [
            {
                uuid: null,
                vulnerability_type: null,
                title: null,
                description: null
            }
        ]
    });

    const [ alertSuccessullySubmitted, setAlertSuccessullySubmitted ] = useState(false)

    useEffect( () => {
        if (submitReportData.message) {
            setAlertSuccessullySubmitted(true)
        }
    }, [submitReportData.message])


    console.log(submitReportData)

    function handleReportChange (e) {
		setReportData((prevFormData) => {
			return {
				...prevFormData,
				[e.target.name]: e.target.value
			};
		});
	}

    async function handleReportSubmit (e) {
        e.preventDefault()

        console.warn('Report submitted')

        const response = await submitReport({
            vulnerability_type: reportData.vulnerability_type,
            severity_level: reportData.severity_level,
            title: reportData.severity_level,
            description: reportData.description
        });
        setSubmitReportData(response)
        console.warn('response', response)
    }


    return (
        <div className="grid h-screen place-items-center">
            <div>
            {alertSuccessullySubmitted && (
                <h3 className="flex justify-center items-center mb-2 text-sm text-green-600 italic">Report successfully submitted!</h3>
            )}
            <h1 className="text-2xl font-semibold mb-4">Submit a report</h1>
                <form onSubmit={handleReportSubmit} className="w-96">
                <div className="relative z-0 mb-6 w-full group">
                    <input 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    type="text" 
                    name="vulnerability_type" 
                    id="vulnerability_type" 
                    placeholder=" "
                    onChange={handleReportChange}
                    value={reportData.vulnerability_type} 
                    required />
                    <label htmlFor="vulnerability_type" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Vulnerability Type</label>
                </div>            
                <div className="relative z-0 mb-6 w-full group">
                    <input 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    type="text" 
                    name="severity_level" 
                    id="severity_level" 
                    placeholder=" "
                    onChange={handleReportChange}
                    value={reportData.severity_level}  
                    required />
                    <label htmlFor="severity_level" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Severity Level</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    type="text" 
                    name="title" 
                    id="title" 
                    placeholder=" "
                    onChange={handleReportChange}
                    value={reportData.title}  
                    required />
                    <label htmlFor="title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <textarea 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    rows="3" 
                    name="description" 
                    id="description" 
                    placeholder=" "
                    onChange={handleReportChange}
                    value={reportData.description}  
                    required />
                    <label htmlFor="description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                </div>
                <button type="submit" className="text-white bg-gray-700 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-800 dark:hover:bg-gray-900 dark:gray:ring-gray-800">Submit Report</button>
                </form>
                </div>
        </div>
    )
}

export default Dashboard