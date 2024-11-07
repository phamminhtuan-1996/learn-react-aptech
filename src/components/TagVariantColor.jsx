import { Image } from "react-bootstrap";
import styled from "styled-components";
const DivParent = styled.div`
cursor: pointer;
.list-color__item {
    width: 90px;
    height: 104px;
    margin-right: 1rem;
}
.list-color__item.active {
    width: 89px;
    border: 1px solid #D37171;
}
.list-color__item--title {
    background-color: rgba(12, 5, 5, 0.6);
    display: flex;
    justify-content: center;
    bottom: 0;
    font-size: 11px;
}
`
export default function TagVariantColor({title="", img = "", value ="",  active = false, emitSelected}) {

    return (
        <DivParent>
            <div className={`list-color__item position-relative ${active ? 'active' : ''}`} onClick={() => emitSelected(value)} >
                <Image className="w-100 h-100" src={img}/>
                <div className="list-color__item--title w-100 position-absolute">
                    <span className="text-white">{title}</span>
                </div>
            </div>
        </DivParent>
    )
}