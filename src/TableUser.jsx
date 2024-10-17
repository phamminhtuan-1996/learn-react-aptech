import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

export default function TableUser() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((res) => {
            setUser(res);
        })
    }, [])
    return(
        <>
             <Table striped bordered hover className='mt-4'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {user.length && user.map((item, key) => (
                        <tr key={key}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.address.street}</td>
                            <td>{item.phone}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </Table>
        </>
    )
}