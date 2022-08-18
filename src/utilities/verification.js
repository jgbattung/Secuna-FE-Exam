async function verification (user) {
    const qrcode = user.qrcode

    const apiSettings = {
        method: 'post',
        body: JSON.stringify(qrcode),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    const response = await fetch('http://ec2-18-139-110-167.ap-southeast-1.compute.amazonaws.com/api/v1/2fa/verify', apiSettings)
    const data = await response.json()

    const apiResponse = {
        code: user.code,
        errors: data.errors ? data.errors : null
    }

    return apiResponse

}

export default verification