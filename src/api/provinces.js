import {urlProvince} from '../api/constant';


async function getListCity () {
    return fetch(urlProvince).then((res) => res.json()).then((res) => res);
}
async function getListDistricts (value) {
    console.log('getListDistricts', value);
    return fetch(urlProvince+'d').then((res) => res.json()).then((res) => res.filter((item) => item.province_code === Number(value)));
}
async function getListWard (value) {
    return fetch(urlProvince+'w').then((res) => res.json()).then((res) => res.filter((item) => item.district_code === Number(value)));
}

const provice = {
    getListCity,
    getListDistricts,
    getListWard,
}

export default provice;