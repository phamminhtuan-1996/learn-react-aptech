import { useState, useEffect } from "react";

import ImgNotfound from "../img/img-not-found.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputField from "./InputField";
import Card from "react-bootstrap/Card";

export default function ModalHandleProduct({
  visible = false,
  data = null,
  acceptData,
  handleClose,
}) {
  const date = new Date();
  const iso = date.toISOString();
  const dataFormDefault = {
    name: "",
    img_url: "",
    price: "",
    created_at: iso,
  };
  const [formData, setFormData] = useState(structuredClone(dataFormDefault));

  useEffect(() => {
    if (!visible) {
        setFormData(structuredClone(dataFormDefault));
        return;
    }
  }, [visible])
  return (
    <Modal show={visible} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{data ? "Edit data" : "Add Data"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputField
          value={formData.name}
          label="Name"
          onChangeValue={(val) => {
            setFormData((prev) => ({
              ...prev,
              name: val,
            }));
          }}
        />
        <InputField
          value={formData.price}
          label="Price"
          onChangeValue={(val) => {
            setFormData((prev) => ({
              ...prev,
              price: val,
            }));
          }}
        />
        <Card className="pa-4">
          <Card.Img
            variant="top"
            src={formData.img_url.length > 0 ? formData.img_url : ImgNotfound}
            onError={(e) => {
                e.target.src = ImgNotfound;
            }}
          />
          <Card.Title>Upload img</Card.Title>
          <Card.Text>Tìm kiếm link ảnh và paste vào</Card.Text>
          <InputField
            value={formData.img_url}
            label="Link img"
            onChangeValue={(val) => {
              setFormData((prev) => ({
                ...prev,
                img_url: val,
              }));
            }}
          />
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => acceptData(formData)}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
