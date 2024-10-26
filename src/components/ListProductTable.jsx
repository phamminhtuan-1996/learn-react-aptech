import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function ListProductTable({data = [], removeItem}) {
    const [ListProduct, SetProduct] = useState([])

    
    useEffect(() => {
        SetProduct(data);
    },[data])
    return (
        <Table striped bordered hover>
             <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>IMG</th>
                    <th>Price</th>
                    <th>Create at</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {ListProduct.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td><img src={item.img_url} alt={item.name} /></td>
                        <td>{item.price}</td>
                        <td>{item.created_at}</td>
                        <td>
                            <Button variant="info" className='text-white me-4'>Edit</Button>
                            <Button variant="danger">Remove</Button>
                        </td>
                    </tr>
                ))}
                
            </tbody>
        </Table>
    )
}