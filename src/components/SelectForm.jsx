import Form from 'react-bootstrap/Form';

export default function SelectForm({title, data=[],required = false,  value=0,field = '', onChangeSelect}) {
  const handleChange = (e) => {
    onChangeSelect(e.target.value, field)
  }
  return (
    <Form.Select required={required} value={value} onChange={handleChange} aria-label="Default select example">
      <option value=''>{title}</option>
      {data.length > 0 && data.map((item, key) => (
        <option value={item.code} key={key}>{item.name}</option>
      ))}
    </Form.Select>
  );
}
