import {url} from './constant';
import requestOption from './request-option';
import {objectToStrapiQuery} from '../utils/helper';


async function getOTP(value) {
    return fetch(url+'otps', requestOption.postHeader(value)).then((res) =>res.json()).then((res) => res);
}
async function getTokenOTP(value) {
    return fetch(url+'otps'+'?'+objectToStrapiQuery(value)).then((res) =>res.json()).then((res) => res);
}

async function getListOrderByInfoUser(value) {
    return fetch(url+'history-transactions'+'?'+objectToStrapiQuery(value)).then((res) =>res.json()).then((res) => res);

}

const auth = {
    getOTP,
    getTokenOTP,
    getListOrderByInfoUser
};

export default auth;