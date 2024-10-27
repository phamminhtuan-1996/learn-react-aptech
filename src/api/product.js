import { url } from "./constanst";
import requestOption from "./handle-header";

async function listProduct() {
  return await fetch(url+'product_id', {...requestOption.getHeaderNormal()})
    .then((res) => res)
    .catch((er) => er);
}

async function getProductDetails(value) {
  return await fetch(url+'product_id/'+value, {...requestOption.getHeaderNormal()})
    .then((res) => res)
    .catch((er) => er);
}

async function addProduct(value) {
  return await fetch(url+'product_id', {...requestOption.getHeaderMethod({method: 'POST', body: value})})
    .then((res) => res)
    .catch((er) => er);
}

async function editProduct(value) {
  return await fetch(url+'product_id/' + value.id, {...requestOption.getHeaderMethod({method: 'PUT', body: value.body})})
    .then((res) => res)
    .catch((er) => er);
}

async function removeProduct(value) {
  return await fetch(url+'product_id/'+ value, {...requestOption.getHeaderMethod({method: 'DELETE', body: {}})})
    .then((res) => res)
    .catch((er) => er);
}


const product = {
    listProduct,
    addProduct,
    removeProduct,
    getProductDetails,
    editProduct
};

export default product;