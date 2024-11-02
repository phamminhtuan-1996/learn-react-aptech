import { useEffect, useState } from "react";
import {Form, Button} from "react-bootstrap";
import Container from "react-bootstrap/Container";
export default function InputSearch({isClear = false, onChangeSearch, value = ""}) {
  const [valSearch, setValSearch] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onChangeSearch(valSearch)
  }
  const handleOnchange = (e) => {
    // setValSearch(e.target.value)
    onChangeSearch(e.target.value)
  }
  useEffect(() => {
    if (!isClear) {
      return;
    }
    setValSearch('');
  }, [isClear])
  return (
    <Container>
      <form className="my-4 d-flex" onSubmit={handleSubmit}>
        <Form.Control
          value={value}
          placeholder="Vui lòng nhập từ khoá để tìm kiếm"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          size="lg"
          onChange={handleOnchange}
        />
        {valSearch !== '' && (
           <Button onClick={() => setValSearch('')}>X</Button>
        )}
      </form>
    </Container>
  );
}
