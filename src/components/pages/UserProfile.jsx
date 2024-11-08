import { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import auth from "../../api/auth";

const DivParent = styled.div`
    min-height: 500px;
    th {
        font-size: 14px;
    }
`;
export default function UserProfile() {
   const [listOrder, setListOrder] = useState([]); 
  const fetchListOrder = async () => {
    const body = {
      sort: "createdAt:desc",
      pagination: {
        start: 0,
        limit: 10,
      },
      filters: {
        phone: localStorage.getItem("phone-login"),
      },
      populate: "*",
    };
    const res = await auth.getListOrderByInfoUser(body);
    console.log(res);
    setListOrder(res.data);
  };
  const formatDate = (val) => {
    const date = new Date(val);
    console.log(date.getHours(), date.getMinutes(), date.getSeconds());
    let resultDate = [date.getDate(), date.getMonth(), date.getFullYear()].join('/');
    let resultTime = `${date.getHours()}:${date.getMinutes()} ${date.getSeconds()}`;
    return resultDate + " " + resultTime;
  }
  const handleCheckLogin = () => {
    const getLocal = localStorage.getItem('documentId');
    if (getLocal) {
      return;
    }
    navigate('/login');
  }
  useEffect(() => {
    fetchListOrder();
  }, []);

  return (
    <DivParent className="d-flex align-items-center">
      <Container>
        <h1 className="my-4 text-center">Danh sách đơn hàng đã đặt</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Mã đặt hàng</th>
              <th>Tên người nhận hàng</th>
              <th>Số điện thoại nhận hàng</th>
              <th>Địa chỉ nhận hàng</th>
              <th>Ngày đặt hàng</th>
            </tr>
          </thead>
          <tbody>
            {listOrder.length === 0 && (
                 <tr>
                    <td colSpan={5}>
                        <div className="d-flex justify-center align-items-center flex-column">
                        <h5>Bạn chưa đặt hàng</h5>
                        <Link to='/'>
                            <Button className="btn-confirm-second rounded-pill mt-4">Mua sắm ngay</Button>
                        </Link>
                        </div>
                        
                    </td>
                 </tr>
            )}
            {listOrder.map((item, key) => (
                <tr key={key}>
                    <td> <Link to={`/success/${item.documentId}`}>Xem chi tiết đơn hàng</Link> </td>
                    <td>{item.name_customer}</td>
                    <td>{item.phone}</td>
                    <td>{item.address}</td>
                    <td>{formatDate(item.createdAt)}</td>
                </tr>
            ))}
            
          </tbody>
        </Table>
      </Container>
    </DivParent>
  );
}
