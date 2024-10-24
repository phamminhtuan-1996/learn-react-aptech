import { useContext } from 'react'
import Form from 'react-bootstrap/Form'
import {Context} from '../utils/AppContext';


export default function InputFieldText() {
    const userContext = useContext(Context);
    const handleInput = (event) => {
        userContext.setValueInput(event.target.value);
    }
    return (
        <>
             <Form.Label>Tìm kiếm</Form.Label>
             <Form.Control type="text" value={userContext.valueInput} placeholder="Nhập vào đây số id để tìm kiếm user vd: 1" onChange={handleInput}/>
        </>
    )
}