async function submitReport (user) {
    const reportData = {
        vulnerability_type: user.vulnerability_type,
        severity_level: user.severity_level,
        title: user.title,
        description: user.description
    }

    const apiSetting = {
        method: 'post',
        body: JSON.stringify(reportData),
        headers: {
            'Accept': 'application/json',
            'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTguMTM5LjExMC4xNjciLCJhdWQiOiJodHRwOi8vMTguMTM5LjExMC4xNjciLCJpYXQiOjE2NjA4MTk0ODAsIm5iZiI6MTY2MDgxOTQ4MCwiZXhwIjoxNjYwODIzMDgwLCJkYXRhIjoiWDJGTFlTTkMzTFlLNDU0UyJ9.wyex5K9jjPupk12Ol4gLOnfhP3CTThWODTIuO1IU4nk",
            'Content-Type': "application/json"
        }   
    };

    const response = await fetch('http://ec2-18-139-110-167.ap-southeast-1.compute.amazonaws.com/api/v1/reports', apiSetting)
    const data = await response.json()

    const apiResponse = {
        message: data.message,
        errors: data.errors ? data.errors : null,
        reports: [
            {
                uuid: data.uuid,
                vulnerability_type: data.vulnerability_type,
                title: data.title,
                description: data.description
            }
        ]
    }

    return apiResponse

}

export default submitReport