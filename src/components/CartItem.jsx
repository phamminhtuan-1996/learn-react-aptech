import {Image, Button} from 'react-bootstrap';
import styled from 'styled-components';
import TagVariantSize from './TagVariantSize';
import Quantity from '../components/Quantity';
const DivParent = styled.div`
.cart-title{
    font-size: 18px;
}
.quantity {
    width: 160px;
    button:nth-child(1) {
        color: #D37171;
    }
    button:nth-child(3) {
        background-color: #D37171;
        color: white;
    }
}
`
export default function CartItem() {

    return ( 
        <DivParent className='d-flex align-items-center mb-4'>
           <div className='w-75 d-flex'>
            <div className="w-25">
            <Image className='w-100' src="https://product.hstatic.net/1000197303/product/pro_hoa_01_1_411026ae0e70472288c8649bb5f9f675_medium.jpg"/>
            </div>
            <div className="w-75 ps-4 d-flex flex-column justify-content-center">
                <h4 className='fw-light cart-title'>Áo thun tay dài họa tiết cổ thuyền phối bèo đính nơ</h4>
                <div className="list-variant my-2">
                    <TagVariantSize title="Hoa 01" />
                    <TagVariantSize title="M" />
                </div>
                <span>295,000₫</span>
            </div>
           </div>
           <div className='w-25 d-flex justify-content-between'>
                <Quantity/>
                <Button variant='light'><i class="fa-solid fa-trash"></i></Button>
           </div>
        </DivParent>
    )
}