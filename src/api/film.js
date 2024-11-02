import { url,valQueryAPIkey, lang, urlMenu } from "./constanst";
import requestOption from "./request-option";

async function getListCate(value) {
  return fetch(url+'movie/'+value+"?"+valQueryAPIkey+`&language=${lang}`, requestOption.getHeader())
    .then((res) => res.json())
    .then((res) => res);
}

async function getListMenu() {
    return fetch(url+'genre/movie/list?'+valQueryAPIkey+`&language=${lang}`, requestOption.getHeader())
    .then((res) => res.json())
    .then((res) => res);
}

async function getListByGenreId(id) {
    return fetch(url+"discover/movie?"+valQueryAPIkey+`&with_genres=${id}`, requestOption.getHeader())
    .then((res) => res.json())
    .then((res) => res);
}

async function searchListByKey(query) {
    return fetch(url+`search/movie?query=${query}&`+valQueryAPIkey, requestOption.getHeader())
    .then((res) => res.json())
    .then((res) => res);
}  

async function getDetailsByID(id) {
    return fetch(url+'movie/'+id+'?'+valQueryAPIkey+'&append_to_response=videos', requestOption.getHeader())
        .then((res) => res.json())
        .then((res) => res)
}
async function getCastByID(id) {
    return fetch(url+'movie/'+id+'/casts?'+valQueryAPIkey+'&append_to_response=videos', requestOption.getHeader())
        .then((res) => res.json())
        .then((res) => res)
}

const listFilm = {
    getListCate,
    getListMenu,
    getListByGenreId,
    searchListByKey,
    getDetailsByID,
    getCastByID
}

export default listFilm;
