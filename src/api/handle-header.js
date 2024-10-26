const requestOption = {
    getHeaderNormal() {
        return {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
            }
        }
    },
    getHeaderMethod(value) {
        return {
            method: value.method,
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(value.body)
        }
    }

}

export default requestOption;