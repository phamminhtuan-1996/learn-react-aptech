import { useEffect, useState, useContext } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Context} from './utils/AppContext';

export default function ListUser() {
    const userContext = useContext(Context);
    const [user, setUser] = useState([]);
    const [valSeach, setValSearch] = useState('');
    const [isShowDataEmpty, setShowDataEmpty] = useState(true);
    
    const handleInput = (event) => {
        setValSearch(event.target.value);
    }
    useEffect(() => {
        setShowDataEmpty(false);
        fetch(`https://jsonplaceholder.typicode.com/users/${userContext.valueInput}`)
            .then((res) => res.json())
            .then((res) => {
                if (!res.name && !res.length) {
                    setShowDataEmpty(true);
                    setUser([]);
                    return;
                }
                if (!Array.isArray(res)) {
                    setUser([res]);
                    return;
                }
                setShowDataEmpty(false);
                setUser(res);
             })
    }, [userContext.valueInput])
    return (
        <Table striped bordered hover>
            <thead>
                
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {user.length > 0 && user.map((item, index) => (
                     <tr key={index}>
                        <td>
                            <Button variant='link' onClick={() => userContext.setValueInput(item.id)}>
                                #{item.id}
                            </Button>
                        </td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.address.street}</td>
                        <td>{item.phone}</td>
                    </tr>
                ))}
               {isShowDataEmpty && (
                <tr>
                    <td colSpan={5}>
                        <h1 className='text-center'>Data empty</h1>
                    </td>
                </tr>
               )}
            </tbody>
      </Table>
    )
}