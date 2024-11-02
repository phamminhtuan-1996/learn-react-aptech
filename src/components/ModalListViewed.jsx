import { useState, useEffect } from "react";
import { Button, Modal, Card } from "react-bootstrap";

export default function ModalListViewed({visible = false, emitClose}) {
    const [listViewed, setListViewed] = useState([]);
    const handleClose = () => emitClose(false);
    const getListViewed = () => {
        const listLocal = localStorage.getItem('list-viewed');
        if (!listLocal) {
            return;
        }
        setListViewed(JSON.parse(listLocal));
    }
    const removeItem = (id) => {
        setListViewed(listViewed.filter((item) => item.id !== id));
        localStorage.setItem('list-viewed', JSON.stringify(listViewed.filter((item) => item.id !== id)));
    }
    useEffect(() => {
        if (!visible) {
            return;
        }
        getListViewed();
    }, [visible])
  return (
    <Modal
      show={visible}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Phim Đã Xem.
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {listViewed.length === 0 && (
            <h5 className="text-center">Chưa có phim đã xem</h5>
        )}
        {listViewed.length > 0 && (
            <>
                {listViewed.map((item, index) => (
                     <Card key={index}>
                        <Card.Body>
                            <div className="d-flex justify-content-between mb-4">
                                <strong>{index}. {item.title}</strong>
                                <Button variant="danger" onClick={() => removeItem(item.id)}>Xoá</Button>
                            </div>
                            
                            <p>
                                {item.description}
                            </p>
                        </Card.Body>
                    </Card>
                ))}
               
            </>
        )}
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
