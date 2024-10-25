import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function App() {
  const [val, setVal] = useState('');
  const [category, setCategory] = useState([]);
  const [isEdit, setEdit] = useState(false);
  const getCategory = () => {
    fetch('https://671a4236acf9aa94f6a9e048.mockapi.io/category').then((res) => res.json()).then((res) => {
      setCategory(res);
    })
  } 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit');
    fetch('https://671a4236acf9aa94f6a9e048.mockapi.io/category', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: val})
    }).then((res) => {
      console.log(res);
      setVal('');
      getCategory();
    })
  }

  const removeItem = (id) => {
    fetch('https://671a4236acf9aa94f6a9e048.mockapi.io/category/'+id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((res) => {
      console.log(res);
      getCategory();
    })
  }
  const setValEdit = (value, index) => {
    setCategory(category.map((item, indexs) => indexs === index ? {...item, name: value} : item));
    
  }
  const handleSubmitSave = (id) => {
    console.log(id);
    const findValue = category.find((item) => item.id === id);
    fetch('https://671a4236acf9aa94f6a9e048.mockapi.io/category/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: findValue?.name || ''})
    }).then((res) => {
      console.log(res);
      setEdit(false);
      getCategory();
    })
  }

  useEffect(() => {
    getCategory();
  }, [])
  return (
    <>
       <Table striped bordered hover>
       <thead>
        <tr>
          <th colSpan={3}>
          <form onSubmit={handleSubmit} className='d-flex'>
          <Form.Control type="text" value={val} placeholder='input category'onChange={(e) => setVal(e.target.value)}/> 
            <Button variant='info' className='text-white' onClick={() => {setEdit(!isEdit)}}>Edit</Button>
          </form>
          </th>
        </tr>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Acction</th>
        </tr>
      </thead>
        <tbody>
        {category.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>
            {!isEdit ? (
              <>
                {item?.name ? item?.name : '' }
              </>
            ) : (
              <>
              <Form.Control type="text" value={item.name} placeholder='input category' onChange={(e) => setValEdit(e.target.value, index)}/> 
              </>
            )}
            </td>
            <td>
              {isEdit && (
                <Button variant='success' onClick={()=> handleSubmitSave(item.id)}>Save</Button>
              )}
              <Button variant="danger" onClick={() => removeItem(item.id)}>Remove</Button> 
            </td>
            
          </tr>
        ))}
          
          </tbody>
       </Table>
    </>
  )
}

export default App
