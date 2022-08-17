async function userRegistration (user) {
    const userData = {
        username: user.username,
        email: user.email,
        password: user.password,
        password_confirmation: user.password_confirmation
    }
    
    const result = await fetch('http://ec2-18-139-110-167.ap-southeast-1.compute.amazonaws.com/api/v1/signup', {
        method: 'post',
        body: JSON.stringify(userData),
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    const data = await result.json()
        console.warn("result", data)
        // localStorage.setItem("user-data", JSON.stringify(data))

    const apiResponse = {
        message: data.message,
        status: data.status,
        errors: data.errors ? data.errors : []
    };

    return apiResponse
}

export default userRegistration