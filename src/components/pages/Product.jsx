import { useParams} from 'react-router-dom';

export default function Product() {
    const {id} = useParams();
    return (
        <>
            <h1>Đây là sản phẩm {id}</h1>
        </>
    )
}