import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function PickColor() {
    const [color, setColor] = useState('secondary');
    const handlePickColor = (e) => {
        const value = e.target.classList[1].replace("btn-", "");
        console.log(value);
        setColor(value);
    }
    useEffect(() => {

    }, [color])
    return (
        <>
            <Card
                bg={color}
                key={color}
                text={['light', 'link'].includes(color)  ? 'dark' : 'white'}
                style={{ width: '18rem' }}
                className="mb-2"
            >
            <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Title>{color} Card Title </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                </Card.Body>
            </Card>
            <Button onClick={(e) => {handlePickColor(e) }} variant="primary">Primary</Button>{' '}
            <Button onClick={(e) => {handlePickColor(e) }} variant="secondary">Secondary</Button>{' '}
            <Button onClick={(e) => {handlePickColor(e) }} variant="success">Success</Button>{' '}
            <Button onClick={(e) => {handlePickColor(e) }} variant="warning">Warning</Button>{' '}
            <Button onClick={(e) => {handlePickColor(e) }} variant="danger">Danger</Button>{' '}
            <Button onClick={(e) => {handlePickColor(e) }} variant="info">Info</Button>{' '}
            <Button onClick={(e) => {handlePickColor(e) }} variant="light">Light</Button>{' '}
            <Button onClick={(e) => {handlePickColor(e) }} variant="dark">Dark</Button>
            <Button onClick={(e) => {handlePickColor(e) }} variant="link">Link</Button>
        </>
    )
}