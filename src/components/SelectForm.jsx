import Form from 'react-bootstrap/Form';

export default function SelectForm({title}) {
  return (
    <Form.Select aria-label="Default select example">
      <option>{title}</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
  );
}
