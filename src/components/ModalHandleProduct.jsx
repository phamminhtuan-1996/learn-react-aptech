import { useState, useEffect } from "react";

import ImgNotfound from "../img/img-not-found.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputField from "./InputField";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ModalHandleProduct({
  visible = false,
  data = null,
  idEdit = -1,
  acceptData,
  acceptDataEdit,
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
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingForm, setLoadingForm] = useState(true);
  const handleSaveEdit = () => {
    setIsLoading(true);
    acceptDataEdit({ id: idEdit, body: formData });
  };
  const handleAcceptData = () => {
    setIsLoading(true);
    acceptData(formData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (idEdit > -1) {
      handleSaveEdit();
      return;
    }
    handleAcceptData();
  };
  useEffect(() => {
    if (!visible) {
      setIsLoading(false);
      setLoadingForm(true);
      setFormData(structuredClone(dataFormDefault));
      return;
    }
    if (formData.name.length > 0 && idEdit === -1) {
      setTimeout(() => {
        setFormData(structuredClone(dataFormDefault));
        setLoadingForm(false);
      }, 500);
      return;
    }
    if (data && visible) {
      setTimeout(() => {
        setFormData({ ...data });
        setLoadingForm(false);
      }, 500);
    }
    setTimeout(() => {
        setLoadingForm(false);
      }, 500);
  }, [visible, data]);

  return (
    <Modal show={visible} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{data ? "Edit data" : "Add Data"}</Modal.Title>
      </Modal.Header>
      {isLoadingForm && (
        <div className="p-4">
        <h1 className="text-center">Loading...</h1>
        </div>
      )}
      {!isLoadingForm && (
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <Row>
              <Col lg={6}>
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
              </Col>
              <Col lg={6}>
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
              </Col>
            </Row>

            <Card className="pa-4">
              {formData.img_url.length > 0 && (
                <Card.Img
                  variant="top"
                  src={
                    formData.img_url.length > 0 ? formData.img_url : ImgNotfound
                  }
                  onError={(e) => {
                    e.target.src = ImgNotfound;
                  }}
                />
              )}

              <Card.Title>Upload img</Card.Title>
              <Card.Text>
                Tìm kiếm link ảnh và paste vào hoặc có thể cho thể thêm vào sau
              </Card.Text>
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
            {!data ? (
              <Button type="submit" variant="primary" disabled={isLoading}>
                {isLoading ? "Accept..." : "Accept"}
              </Button>
            ) : (
              <Button type="submit" variant="success" disabled={isLoading}>
                {isLoading ? "Save..." : "Save"}
              </Button>
            )}
          </Modal.Footer>
        </form>
      )}
    </Modal>
  );
}
