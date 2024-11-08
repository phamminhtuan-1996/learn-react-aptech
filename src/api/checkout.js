import {url} from './constant';
import requestOption from './request-option';
import {objectToStrapiQuery} from '../utils/helper';


async function postCheckout(value) {
    return fetch(url+'history-transactions', requestOption.postHeader(value)).then((res) => res.json());
}
async function getTransaction(value) {
    return fetch(url+'history-transactions'+'?'+objectToStrapiQuery(value)).then((res) => res.json()).then((res) => res);
}
async function getTransactionDetails(value) {
    return fetch(url+'history-transactions/'+value).then((res) => res.json()).then((res) => res);
}
const checkout = {
    postCheckout,
    getTransaction,
    getTransactionDetails
}

export default checkout;