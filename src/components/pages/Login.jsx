import { useState, useEffect } from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
import {generateRandomNumbers} from '../../utils/helper';
import styled from "styled-components";
import auth from '../../api/auth';
import { useNavigate } from 'react-router-dom';
const DivParent = styled.div`
  height: 500px;
  background-image: url('https://theme.hstatic.net/1000197303/1001046599/14/login-bg.jpg?v=10006');
  .frame-login {
    width: 400px;
    .form-control {
        height: 57px;
    }
  }
`;
export default function Login() {
  const navigate = useNavigate();
  const [valInput, setValInput] = useState("");
  const [valInputOTP, setValInputOTP] = useState("");
  const [isShowInputOTP, setShowInputOTP] = useState(false);
  const fetchOTP = async () => {
    const body = {
      data: {
        code_otp: generateRandomNumbers(4).join(''),
        phone: valInput,
      }
    } 
    const res = await auth.getOTP(body);
    console.log(res);
    if (!res.data) {
      return;
    }
    setShowInputOTP(true);
  }
  const handleSubmitOTP = async (e) => {
    e.preventDefault();
    await fetchOTP();
  }
  const handleSubmitgetTokenOTP = async (e) => {
    e.preventDefault();
    const body = {
      sort: "createdAt:desc",
      pagination: {
        start: 0,
        limit: 10,
      },
      filters: {
        code_otp: valInputOTP
      },
      populate: "*",
    };
    const res = await auth.getTokenOTP(body);
    if (!res.data) {
      return;
    }
    localStorage.setItem('documentId', res.data[0].documentId);
    localStorage.setItem('phone-login', valInput);
    navigate('/user');
  }
  const handleCheckLogin = () => {
    const getLocal = localStorage.getItem('documentId');
    if (!getLocal) {
      return;
    }
    navigate('/user');
  }
  useEffect(() => {
    handleCheckLogin();
  }, [])
  return (
    <DivParent>
      <Container className="h-100 d-flex align-items-center justify-content-center">
        <Card className="frame-login my-auto p-4" >
            <Card.Title className="text-center">
                Đăng nhập
            </Card.Title>
            <Card.Body className="" >
                {!isShowInputOTP && (
                  <form className="d-flex justify-content-center flex-column align-items-center" onSubmit={handleSubmitOTP}>
                    <Form.Control
                    value={valInput}
                    className="rounded-pill  w-100"
                    placeholder="nhập số điện thoại / email để đăng nhập"
                    onChange={(e) => setValInput(e.target.value)}
                    ></Form.Control>
                    <Button className="btn-confirm mt-4" type="submit">Đăng nhập</Button>
                </form>
              )}

              {isShowInputOTP && (
                <>
                 <form className="d-flex justify-content-center flex-column align-items-center" onSubmit={handleSubmitgetTokenOTP}>
                   <Form.Control  
                   value={valInputOTP}
                    className="rounded-pill  w-100"
                    placeholder="nhập OTP"
                    onChange={(e) => setValInputOTP(e.target.value)}
                  ></Form.Control>
                  <Button className="btn-confirm mt-4" type="submit">Gửi</Button>
                 </form>
                 <Button variant="link" className="mx-auto d-block mt-4" onClick={handleSubmitOTP}>Gửi lại</Button>
                 </>
              )}
                
            </Card.Body>
        </Card>
        
      </Container>
    </DivParent>
  );
}
