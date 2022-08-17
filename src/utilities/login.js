async function logIn (user) {
    const userData = {
        username: user.username,
        password: user.password
    }

    const apiSettings = {
        method: 'post',
        body: JSON.stringify(userData),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    const response = await fetch('http://ec2-18-139-110-167.ap-southeast-1.compute.amazonaws.com/api/v1/signin', apiSettings);
    const data = await response.json()

    const apiResponse = {
        message: data.message,
        two_fa_qr_url: data.two_fa_qr_url,
        two_fa_enabled: data.two_fa_enabled,
        access_token: data.access_token
    }


}