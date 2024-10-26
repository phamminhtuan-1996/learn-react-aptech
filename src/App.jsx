import { useState, useEffect } from "react";
// api
import product from "./api/product";

// components
import ListProductTable from "./components/ListProductTable";
import Button from "react-bootstrap/Button";
import ModalHandleProduct from "./components/ModalHandleProduct";

function App() {
  const [listProduct, setListProduct] = useState([]);
  const [isVisibleModalAdd, setVisibleModalAdd] = useState(false);
  const getListProduct = async () => {
    const getProduct = await product.listProduct();
    if (!getProduct.ok) {
      return;
    }
    const data = await getProduct.json();
    setListProduct(data.reverse());
  };
  const addNewProduct = async (val) => {
    const addProduct = await product.addProduct(val);
    if (!addProduct.ok) {
      return;
    }
    setListProduct([val, ...listProduct])
    setVisibleModalAdd(false);
  }
  useEffect(() => {
    getListProduct();
  }, []);
  return (
    <>
      <div className="d-flex justify-content-center py-4">
        <Button variant="success" size="lg" size="lg" onClick={() => setVisibleModalAdd(true)}>
          + Thêm
        </Button>
      </div>
      <ListProductTable data={listProduct} />
      <ModalHandleProduct
        visible={isVisibleModalAdd}
        acceptData={(val) => {
          console.log('ModalHandleProduct val',val)
          addNewProduct(val);
        }}
        handleClose={() => setVisibleModalAdd(false)}
      />
    </>
  );
}

export default App;
