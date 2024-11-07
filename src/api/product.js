import {url} from './constant';
import {queryStringStrapi, objectToStrapiQuery} from '../utils/helper';

async function listProductGeneral (value) {
    return fetch(url+'products'+'?'+objectToStrapiQuery(value)).then((res) => res.json()).then((res) => res);
}
async function listCate (value) {
    return fetch(url+'category-products'+'?'+queryStringStrapi(value)).then((res) => res.json()).then((res) => res);
}

async function getProductVariant(value) {
    return fetch(url+'product-variants'+'?'+objectToStrapiQuery(value)).then((res) => res.json()).then((res) => res);
}


const product = {
    listProductGeneral,
    listCate,
    getProductVariant
}

export default product;