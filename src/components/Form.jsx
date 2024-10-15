import {useState} from 'react';

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [visible, setVisible] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setVisible(true);
    }
    return (
        <div className='mt-4'>
            {visible && (
                <>
                    <h1>Họ tên: {name}</h1>
                    <h1>email: {email}</h1>
                </>
            )}
            <form onSubmit={handleSubmit}>
                Họ tên: <input type="text" value={name} onChange={(e) => setName(e.target.value)}/> <br />
                Email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/> <br/>
                <button type="submit" className='btn btn-primary mt-4'>Gửi thông tin</button>
            </form>
        </div>
    )
}
