import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


export default function InputField({value = '', label= '', type= '', placeholder='', onChangeValue}) {
    const handleInputChange = (event) => {
        const newValue = event.target.value;
        onChangeValue(newValue); 
    }
    return (
        <div className='mb-4'>
            <FloatingLabel
                controlId="floatingInput"
                label={label}
                className="mb-3"
            >
                <Form.Control
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={handleInputChange}
                />
            </FloatingLabel>
        </div>
    )
}