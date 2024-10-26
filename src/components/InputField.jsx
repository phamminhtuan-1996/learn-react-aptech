import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


export default function InputField({value = '', label= '', type= '', placeholder='', onChangeValue}) {
    const [val, setVal] = useState('');
    useEffect(() => {
        setVal(value);
    }, [value]);

    useEffect(() => {
        if (typeof onChangeValue === 'function') {
            onChangeValue(val);
        }
    }, [val])
    return (
        <div className='mb-4'>
            <FloatingLabel
                controlId="floatingInput"
                label={label}
                className="mb-3"
            >
                <Form.Control
                    type={type}
                    value={val}
                    placeholder={placeholder}
                    onChange={(e) => {
                        setVal(e.target.value);
                    }}
                />
            </FloatingLabel>
        </div>
    )
}