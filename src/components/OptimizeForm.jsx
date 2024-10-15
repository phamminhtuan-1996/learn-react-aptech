import { useState } from "react";

export default function OptimizeForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const handleFormData = (e) => {
        const {name, value} = e.target;
        setFormData((pre) => ({
            ...pre,
            [name]: value
        }))
    }
    const handleSubmit  = (e) => {
        e.preventDefault();
        const result = `Họ tên: ${formData.name}, Emai: ${formData.email}, Phone: ${formData.phone}`;
        alert(result);
    }
    return (
        <form onSubmit={handleSubmit}>
            Họ tên: <input type="text" value={formData.name} name="name" onChange={(e) => handleFormData(e)}/> <br />
            Email: <input type="text" value={formData.email} name="email" onChange={(e) => handleFormData(e)}/> <br/>
            Phone: <input type="text" value={formData.phone} name="phone" onChange={(e) => handleFormData(e)}/> <br/>
            <button type="submit" className='btn btn-primary mt-4'>Gửi thông tin</button>
        </form>
    )
}