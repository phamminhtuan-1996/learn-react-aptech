import { useState, useEffect, useContext } from 'react';
import {Button, Modal} from 'react-bootstrap';
import {Context} from '../utils/AppContext';
import listFilm from '../api/film';

export default function ModalViewDetails({visible=false, emitClose}) {
    const {idViewDetails} = useContext(Context);
    const [dataDetails, setDataDetails] = useState({});
    const [litstCast, setListCast] = useState([]);
    
    const handleClose = () => emitClose(false);

    const fetchDataDetailsByID = async () => {
        const dataFetch = await listFilm.getDetailsByID(idViewDetails);
        console.log('dataFetch in details', dataFetch)
        setDataDetails(dataFetch);
        saveListViewed(dataFetch);
    }
    const fetchDataCastByID = async () => {
        const dataFetch = await listFilm.getCastByID(idViewDetails);
        console.log('fetchDataCastByID', dataFetch.cast.splice(0,8));
        setListCast(dataFetch.cast.splice(0,8));
    }
    const saveListViewed = (data) => {
        let getDataLocalStorage = localStorage.getItem('list-viewed');
        if (!getDataLocalStorage) {
            localStorage.setItem('list-viewed', JSON.stringify([]));
            getDataLocalStorage = localStorage.getItem('list-viewed');
        }
        let listResult = JSON.parse(getDataLocalStorage);
        listResult.push({id: listResult.length, title:data.original_title,  description: data.overview});
        localStorage.setItem('list-viewed', JSON.stringify(listResult));
    }
    useEffect(() => {
        if (!visible) {
            return;
        }
       fetchDataDetailsByID();
       fetchDataCastByID();
    }, [visible])
    return (
        <Modal show={visible} size="lg" centered onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Xem chi tiết phim</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3>{dataDetails.original_title}</h3>
               <p>{dataDetails.overview}</p>
               <ul>
                {litstCast.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
                
               </ul>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>  
    )
}