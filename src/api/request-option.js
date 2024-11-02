const requestOption = {
    getHeader() {
        return {
            method: 'GET', 
            headers: {accept: 'application/json'}
        };
    }
}

export default requestOption;