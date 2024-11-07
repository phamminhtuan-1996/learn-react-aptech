import { useEffect, useState } from 'react';
import product from '../../api/product';
import {Container, Image} from 'react-bootstrap';
import SliderHome from '../SliderHome';
import ListCategory from '../ListCategory';
import PartProductHome from '../PartProductHome';
import Collection from '../Collection';
import SendEmail from '../SendEmail';
export default function Home() {
    const [listProductGenneral, setProductsGeneral] = useState([]);
    const [listProductsSignature, setProductsSignature] = useState([]);
    const [listProductsBestSeller, setProductsBestSeller] = useState([]);
    const fetchProductGeneral = async () => {
        const body = {
            sort: 'createdAt:asc',
            pagination: {
              start: 0,
              limit: 8,
            },
            filters: {},
            field: ['product_name', 'price', 'thumbnail', 'promotion_price'],
            populate: 'thumbnail'
          };
        product.listProductGeneral(body).then((res) => {
            setProductsGeneral(res.data);
        })
    }
    const fetchProductSignature = async () => {
        const body = {
            sort: 'createdAt:asc',
            pagination: {
              start: 0,
              limit: 8,
            },
            filters: {
                category_product: {
                    id:  17
                }
            },
            field: ['product_name', 'price', 'thumbnail', 'promotion_price'],
            populate: 'thumbnail'
          };
        product.listProductGeneral(body).then((res) => {
            setProductsSignature(res.data);
        })
    }
    const fetchProductBestSeller = async () => {
        const body = {
            sort: 'createdAt:asc',
            pagination: {
              start: 0,
              limit: 8,
            },
            filters: {
                best_seller: true
            },
            field: ['product_name', 'price', 'thumbnail', 'promotion_price'],
            populate: 'thumbnail'
          };
        product.listProductGeneral(body).then((res) => {
            setProductsBestSeller(res.data);
        })
    }
    useEffect(() => {
        fetchProductGeneral();
        fetchProductSignature();
        fetchProductBestSeller();
    }, [])
    return (
        <>
            <Container>
                <SliderHome/>
                <h3 className='text-center my-4 fw-light'>Danh mục</h3>
                <ListCategory/>
                <Image fluid="true" className='my-4' src="https://theme.hstatic.net/1000197303/1001046599/14/img-home-collection1.jpg?v=9978"/>
                <PartProductHome title="TỔNG SẢN PHẨM" data={listProductGenneral}/>
                <Image fluid="true" className='my-4' src="https://theme.hstatic.net/1000197303/1001046599/14/img-home-collection2.jpg?v=9978"/>
                <PartProductHome title="MARC SIGNATURE" data={listProductsSignature} />
                <Image fluid="true" className='my-4' src="https://theme.hstatic.net/1000197303/1001046599/14/img-home-collection3.jpg?v=9978"/>
                <PartProductHome title="BEST SELLER" data={listProductsBestSeller}/>
                <Collection/>
            </Container>
            <SendEmail/>
        </>
    )
}