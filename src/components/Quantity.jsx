import {Button} from 'react-bootstrap';
import styled from 'styled-components';
const DivParent = styled.div`
width: 100px;
border: 1px solid #ddd;
input {
    width: 70%;
    border: unset
}
button {
    width: 30%;
    padding: 0;
    border-radius: unset;
    border: unset;
    background-color: #d9d9d9;
    color: black;
}
`
export default function Quantity({value = 0, min = -100, max=-1, onChangeEvent}) {

    const handleCountQuantity = (method) => {
        if (method === 'minus' && value <= min) {
            return;
        }
        if (method === 'plus' && max > -1 && value === max) {
            return;
        } 
        onChangeEvent(method === 'plus' ? value + 1 : value - 1);
    }
    const handleOnchangeEventTyping = (e) => {
        onChangeEvent(Number(e.target.value));
    }
    return (
        <DivParent className='quantity d-flex'>
            <Button onClick={() => handleCountQuantity('minus')}>-</Button>
            <input type="number" className='text-center' value={value} onChange={handleOnchangeEventTyping}/>
            <Button onClick={() => handleCountQuantity('plus')}>+</Button>
        </DivParent>
    )
}