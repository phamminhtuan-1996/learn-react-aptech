import { useState } from 'react';
import {formatNumberThoundSand} from '../utils/helper';
import {Image, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
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
export default function CartItem({data={}, remoItem}) {
    const [ValQUantity, setQuantity] = useState(data.quantity);
    const handleSetQuantity = (val) => {
        setQuantity(val);
        const getListItemLocal = JSON.parse(localStorage.getItem('list-cart'));
        let result = getListItemLocal;
        const index = getListItemLocal.findIndex((item) => item.idProduct === data.idProduct);
        result[index].quantity = Number(val);
        localStorage.setItem('list-cart', JSON.stringify(result));
    }
    return ( 
        <DivParent className='d-flex align-items-center mb-4'>
           <div className='w-75 d-flex'>
            <div className="w-25">
            <Link to={`/product/${data.idProduct}`}>
                <Image className='w-100' src={data.thumbnail}/>
            </Link>
            </div>
            <div className="w-75 ps-4 d-flex flex-column justify-content-center">
                <h4 className='fw-light cart-title'>{data.product_name}</h4>
                <div className="list-variant my-2">
                    <TagVariantSize title={data.name_variant} />
                    <TagVariantSize title={data.size} />
                </div>
                <span>{formatNumberThoundSand(data.price * ValQUantity)}₫</span>
            </div>
           </div>
           <div className='w-25 d-flex justify-content-between'>
                <Quantity value={ValQUantity} onChangeEvent={handleSetQuantity}/>
                <Button variant='light' onClick={() => remoItem(data.idProduct)}><i class="fa-solid fa-trash"></i></Button>
           </div>
        </DivParent>
    )
}