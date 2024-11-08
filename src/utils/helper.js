import { urlIMG } from "../api/constant";
export function queryStringStrapi(obj) {
    const objectData = obj;
    const listKeyParent = Object.keys(objectData);
    let result = [];
    //push key not object
    listKeyParent.forEach((key) => {
      if (typeof objectData[key] !== 'object') {
        result.push(`${key}=${objectData[key].trim()}`);
      }
    })
    //push key is object 
    listKeyParent.forEach((key) => {
      if (typeof objectData[key] === 'object' && objectData[key] !== null) {
        const listKeyObjecs = Object.keys(objectData[key]);
        listKeyObjecs.forEach((keyChild) => {
          if (typeof objectData[key][keyChild] === 'object' && objectData[key][keyChild] !== null) {
            const queryStringChild = findChildObjQueryRecursive(objectData[key][keyChild]).join('');
            result.push(`${key}[${keyChild}]=${queryStringChild}`);
          } else {
            const isStr = typeof objectData[key][keyChild] === 'string' ? encodeURIComponent(objectData[key][keyChild].trim()) : objectData[key][keyChild];
            result.push(`${key}[${keyChild}]=${isStr}`);
          }
        })
      }
    })
    return result.join('&');
  }

  export function objectToStrapiQuery(obj) {
    const queryString = new URLSearchParams();

    function buildQuery(key, value) {
        if (typeof value === 'object' && value !== null) {
            Object.keys(value).forEach(subKey => {
                buildQuery(`${key}[${subKey}]`, value[subKey]);
            });
        } else {
            queryString.append(key, value);
        }
    }

    Object.keys(obj).forEach(key => buildQuery(key, obj[key]));
    return queryString.toString();
}

  export function formatNumberThoundSand(val) {
    const value = Number(val);
    if (isNaN(value) || value == null) {
      return;
    }
    const result = value.toLocaleString(undefined, { maximumFractionDigits: 4 });
    return String(result);
  }

  export function getImgStrapi(obj, type = null) {
    if (type) {
      return urlIMG + obj.formats[type].url;
    }
    return urlIMG + obj.url;
  }

  export function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  export function generateRandomNumbers(length) {
    return Array.from({ length }, () => Math.floor(Math.random() * 100));
  }