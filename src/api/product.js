import { url } from "./constanst";
import requestOption from "./handle-header";

async function listProduct() {
  return await fetch(url+'product_id', {...requestOption.getHeaderNormal()})
    .then((res) => res)
    .catch((er) => er);
}

async function addProduct(value) {
  return await fetch(url+'product_id', {...requestOption.getHeaderMethod({method: 'POST', body: value})})
    .then((res) => res)
    .catch((er) => er);
}


const product = {
    listProduct,
    addProduct
};

export default product;