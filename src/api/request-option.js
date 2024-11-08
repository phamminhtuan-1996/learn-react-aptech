const requestOption = {
    postHeader(value) {
        return {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
        };
    }
}

export default requestOption;