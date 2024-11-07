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
//   {
//     "id": 16,
//     "documentId": "l6u6j9yauem4ucx409gf3olj",
//     "name": "pro_den_4_0199316ffea6493a93e0a2f2a9bba063_master.jpg",
//     "alternativeText": null,
//     "caption": null,
//     "width": 1500,
//     "height": 2000,
//     "formats": {
//         "thumbnail": {
//             "name": "thumbnail_pro_den_4_0199316ffea6493a93e0a2f2a9bba063_master.jpg",
//             "hash": "thumbnail_pro_den_4_0199316ffea6493a93e0a2f2a9bba063_master_4e53f3025d",
//             "ext": ".jpg",
//             "mime": "image/jpeg",
//             "path": null,
//             "width": 117,
//             "height": 156,
//             "size": 2.18,
//             "sizeInBytes": 2182,
//             "url": "/uploads/thumbnail_pro_den_4_0199316ffea6493a93e0a2f2a9bba063_master_4e53f3025d.jpg"
//         },
//         "large": {
//             "name": "large_pro_den_4_0199316ffea6493a93e0a2f2a9bba063_master.jpg",
//             "hash": "large_pro_den_4_0199316ffea6493a93e0a2f2a9bba063_master_4e53f3025d",
//             "ext": ".jpg",
//             "mime": "image/jpeg",
//             "path": null,
//             "width": 750,
//             "height": 1000,
//             "size": 29.61,
//             "sizeInBytes": 29611,
//             "url": "/uploads/large_pro_den_4_0199316ffea6493a93e0a2f2a9bba063_master_4e53f3025d.jpg"
//         },
//         "medium": {
//             "name": "medium_pro_den_4_0199316ffea6493a93e0a2f2a9bba063_master.jpg",
//             "hash": "medium_pro_den_4_0199316ffea6493a93e0a2f2a9bba063_master_4e53f3025d",
//             "ext": ".jpg",
//             "mime": "image/jpeg",
//             "path": null,
//             "width": 563,
//             "height": 750,
//             "size": 18.76,
//             "sizeInBytes": 18756,
//             "url": "/uploads/medium_pro_den_4_0199316ffea6493a93e0a2f2a9bba063_master_4e53f3025d.jpg"
//         },
//         "small": {
//             "name": "small_pro_den_4_0199316ffea6493a93e0a2f2a9bba063_master.jpg",
//             "hash": "small_pro_den_4_0199316ffea6493a93e0a2f2a9bba063_master_4e53f3025d",
//             "ext": ".jpg",
//             "mime": "image/jpeg",
//             "path": null,
//             "width": 375,
//             "height": 500,
//             "size": 10.2,
//             "sizeInBytes": 10195,
//             "url": "/uploads/small_pro_den_4_0199316ffea6493a93e0a2f2a9bba063_master_4e53f3025d.jpg"
//         }
//     },
//     "hash": "pro_den_4_0199316ffea6493a93e0a2f2a9bba063_master_4e53f3025d",
//     "ext": ".jpg",
//     "mime": "image/jpeg",
//     "size": 94.51,
//     "url": "/uploads/pro_den_4_0199316ffea6493a93e0a2f2a9bba063_master_4e53f3025d.jpg",
//     "previewUrl": null,
//     "provider": "local",
//     "provider_metadata": null,
//     "createdAt": "2024-11-05T13:31:26.706Z",
//     "updatedAt": "2024-11-05T13:31:26.706Z",
//     "publishedAt": "2024-11-05T13:31:26.706Z"
// }
  export function getImgStrapi(obj, type = null) {
    if (type) {
      return urlIMG + obj.formats[type].url;
    }
    return urlIMG + obj.url;
  }