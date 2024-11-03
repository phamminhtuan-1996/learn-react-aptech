import { Form, InputGroup, Image } from 'react-bootstrap';
import styled from 'styled-components';
export default function SendEmail() {
    const DivParent = styled.div`
        background-color: #2C2C2C;
        height: 260px;
        margin-top: 1rem;
        color: white;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        h1 {
            font-size: 32px;
        }
        p {
            font-size: 12px;
        }
        .form-control {
            border: none;
        }
        .input-group {
            width: 520px;
            height: 50px;
        }
        .input-group-text img{
            width: 24px;
            height: 24px;
        }
        .input-group-text {
            background-color: #fff;
            border: none
        }
    `

    return (
        <DivParent>
            <h1>ĐĂNG KÍ NHẬN KHUYẾN MÃI</h1>
            <p>Hãy nhập email của bạn vào đây để nhận được xu hướng thời trang và khuyến mãi mới nhất từ MARC nhé.</p>
            <InputGroup className="mb-3 border overflow-hidden rounded-pill">
                <Form.Control
                placeholder='Nhập email của bạn'
                />
                <InputGroup.Text id="basic-addon1">
                   <Image src="https://cdn-icons-png.flaticon.com/512/9131/9131608.png" />
                </InputGroup.Text>
            </InputGroup>
            {/* <Form.Control className='rounded-pill' placeholder='Nhập email của bạn'/> */}
        </DivParent>
    )
}