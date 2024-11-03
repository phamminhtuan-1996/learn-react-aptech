import {Container, Image} from 'react-bootstrap';
import SliderHome from '../SliderHome';
import ListCategory from '../ListCategory';
import PartProductHome from '../PartProductHome';
import Collection from '../Collection';
import SendEmail from '../SendEmail';
export default function Home() {
    return (
        <>
            <Container>
                <SliderHome/>
                <h3 className='text-center my-4 fw-light'>Danh mục</h3>
                <ListCategory/>
                <Image fluid="true" className='my-4' src="https://theme.hstatic.net/1000197303/1001046599/14/img-home-collection1.jpg?v=9978"/>
                <PartProductHome title="TỔNG SẢN PHẨM" />
                <Image fluid="true" className='my-4' src="https://theme.hstatic.net/1000197303/1001046599/14/img-home-collection2.jpg?v=9978"/>
                <PartProductHome title="MARC SIGNATURE" />
                <Image fluid="true" className='my-4' src="https://theme.hstatic.net/1000197303/1001046599/14/img-home-collection3.jpg?v=9978"/>
                <PartProductHome title="BEST SELLER" />
                <Collection/>
            </Container>
            <SendEmail/>
        </>
    )
}