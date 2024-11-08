import { useContext, useEffect } from 'react';
import {Context} from '../utils/AppContext';
import Toast from 'react-bootstrap/Toast';
import styled from 'styled-components';
const DivParent = styled.div`
    .toast-body {
        color: white;
    }
    .toast {
        left: unset !important;
        right: 0 !important;
    }
`
export default function ToastNoftication() {
    const {
        isShowNoftication, 
        setShowNotication,
        messageNoti
    } = useContext(Context);
    useEffect(() => {
        if (!isShowNoftication) {
            return;
        }
        setTimeout(() => {
            setShowNotication(false);
        }, 1200)
    }, [isShowNoftication])
    return (
        <DivParent>
        <Toast show={isShowNoftication} bg="success" className="fixed-top" onClose={() => setShowNotication(false)}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Thông báo</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>{messageNoti}</Toast.Body>
        </Toast>
        </DivParent>
    )
}