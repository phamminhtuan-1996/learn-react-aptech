import { useState, useEffect } from "react";
// api
import product from "./api/product";

// components
import ListProductTable from "./components/ListProductTable";
import Button from "react-bootstrap/Button";
import ModalHandleProduct from "./components/ModalHandleProduct";
import FormInput from './components/FormInput';

function App() {
  const [listProduct, setListProduct] = useState([]);
  const [dataFormEdit, setDataFormEdit] = useState(null);
  const [idBeingEdited, setIdBeingEdited] = useState(-1);
  const [isVisibleModalAdd, setVisibleModalAdd] = useState(false);
  const getListProduct = async () => {
    const getProduct = await product.listProduct();
    if (!getProduct.ok) {
      return;
    }
    const data = await getProduct.json();
    setListProduct(data.reverse());
  };
  const handlAddNewProduct = async (val) => {
    const addProduct = await product.addProduct(val);
    if (!addProduct.ok) {
      return;
    }
    const data = await addProduct.json();
    setListProduct([data, ...listProduct]);
    setVisibleModalAdd(false);
  };
  const handlRemoveProductItem = (id) => {
    product.removeProduct(id).then((res) => {
      if(!res.ok) {
        return;
      }
      setListProduct((prev) => prev.filter((item) => item.id !== id));
    })
  };

  const handleGetItemProduct = async (id) => {
    setIdBeingEdited(id);
    const itemProduct = await product.getProductDetails(id);
    if (!itemProduct.ok) {
      return;
    }
    const data = await itemProduct.json();
    setVisibleModalAdd(true);
    setDataFormEdit(data);
  }
  const handlGetEditProduct = async (value) => {
    const itemProduct = await product.editProduct(value);
    if (!itemProduct.ok) {
      return;
    }
    const data = await itemProduct.json();
    const index = listProduct.findIndex((item) => item.id === String(idBeingEdited));
    listProduct[index] = data;
    setListProduct(listProduct);
    setVisibleModalAdd(false);
  }

  useEffect(() => {
    getListProduct();
  }, []);

  useEffect(() => {
    if (!isVisibleModalAdd && idBeingEdited > -1) {
      setIdBeingEdited(-1);
      setDataFormEdit(null);
    }
  }, [isVisibleModalAdd])


  return (
    <>
    {!isVisibleModalAdd && (
      <div className="d-flex justify-content-center py-4">
      <Button
        variant="success"
        size="lg"
        onClick={() => setVisibleModalAdd(true)}
      >
        + Thêm
      </Button>
    </div>
    )} 
      
      {!isVisibleModalAdd && (
        <div className="px-5">
          <ListProductTable
            data={listProduct}
            isEdit={idBeingEdited}
            editProduct={handleGetItemProduct}
            removeItem={handlRemoveProductItem}
          />
        </div>
      )}
      
      {/* <ModalHandleProduct
        visible={isVisibleModalAdd}
        data={dataFormEdit}
        idEdit={idBeingEdited}
        acceptData={handlAddNewProduct}
        acceptDataEdit={handlGetEditProduct}
        handleClose={() => {
          setDataFormEdit(null);
          setVisibleModalAdd(false);
        }}
      /> */}
      {isVisibleModalAdd && (
        <FormInput
          visible={isVisibleModalAdd}
          data={dataFormEdit}
          idEdit={idBeingEdited}
          acceptData={handlAddNewProduct}
          acceptDataEdit={handlGetEditProduct}
          handleClose={() => {
            setDataFormEdit(null);
            setVisibleModalAdd(false);
          }}
        />
      )}
      
    </>
  );
}

export default App;
