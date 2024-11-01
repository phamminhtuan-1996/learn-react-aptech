import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

export default function Home () {
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate('/about');
    }
    return (
        <>
            <h1 className="text-center"> Home </h1>
            <Button variant='primary' onClick={handleRedirect}>About</Button>
        </>
    )
}