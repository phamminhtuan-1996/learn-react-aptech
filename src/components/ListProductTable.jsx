import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ImgNotfound from "../img/img-not-found.png";

export default function ListProductTable({
  data = [],
  isEdit = -1,
  editProduct,
  removeItem,
}) {
  const [ListProduct, SetProduct] = useState([]);
  const [listRemove, setListRemove] = useState([]);

  const formatUTCPlus7 = (val) => {
    let date = new Date(val);
    let result = [date.getDate(), date.getMonth(), date.getFullYear()].join(
      "/"
    );
    const getTime = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ].join(":");
    result = result + " " + getTime;
    return result;
  };

  const handleRemoveItem = (id) => {
    removeItem(id);
    setListRemove((prev) => ([...prev, id]));
  }
  useEffect(() => {
    SetProduct(data);
    setListRemove([]);
  }, [data]);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>IMG</th>
            <th>Name</th>
            <th>Price</th>
            <th>Create at</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {ListProduct.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>
                <img
                  src={item.img_url}
                  alt={item.name}
                  onError={(e) => {
                    e.target.src = ImgNotfound;
                  }}
                />
              </td>
              <td>{item.name}</td>

              <td>{item.price}</td>
              <td>{formatUTCPlus7(item.created_at)}</td>
              <td>
                <Button
                  variant="info"
                  disabled={isEdit === item.id}
                  className="text-white me-4"
                  onClick={() => editProduct(item.id)}
                >
                  {isEdit === item.id ? "Edit..." : "Edit"}
                </Button>
                <Button
                  variant="danger"
                  disabled={listRemove.includes(item.id)}
                  onClick={() => handleRemoveItem(item.id)}
                >
                  {/* Remove */}
                  {listRemove.includes(item.id) ? "Remove..." : "Remove"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {ListProduct.length === 0 && (
        <h1 className="text-center">Data Empty</h1>
      )}
    </>
  );
}
