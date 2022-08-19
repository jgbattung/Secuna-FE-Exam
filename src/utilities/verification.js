async function verification (user) {
    const code = {code: user.code}

    const apiSettings = {
        method: 'post',
        body: JSON.stringify(code),
        headers: {
            'Accept': 'application/json',
            // 'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTguMTM5LjExMC4xNjciLCJhdWQiOiJodHRwOi8vMTguMTM5LjExMC4xNjciLCJpYXQiOjE2NjA4MTk0ODAsIm5iZiI6MTY2MDgxOTQ4MCwiZXhwIjoxNjYwODIzMDgwLCJkYXRhIjoiWDJGTFlTTkMzTFlLNDU0UyJ9.wyex5K9jjPupk12Ol4gLOnfhP3CTThWODTIuO1IU4nk",
            'Content-Type': 'application/json'
        }
    };

    const response = await fetch('http://ec2-18-139-110-167.ap-southeast-1.compute.amazonaws.com/api/v1/2fa/verify', apiSettings)
    const data = await response.json()

    const apiResponse = {
        access_token: data.access_token,
        type: data.type,
        errors: data.errors ? data.errors : null
    }

    return apiResponse

}

export default verification