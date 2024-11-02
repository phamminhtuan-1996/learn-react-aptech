import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function FilmItem({data}) {
  const handleGetDetailsWithID = () => {
    console.log('handleGetDetailsWithID', data.id)
  }
  return (
    <Card className='mb-4'>
      <Card.Img variant="top" src={"https://media.themoviedb.org/t/p/w440_and_h660_face/" + data.backdrop_path} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
           {data.release_date}
        </Card.Text>
        <Button
            variant="primary"
            onClick={handleGetDetailsWithID}
        >
            Xem chi tiết
        </Button>
      </Card.Body>
    </Card>
  );
}