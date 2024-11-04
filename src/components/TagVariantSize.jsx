import {Button} from 'react-bootstrap';
import styled from 'styled-components';

const ButtonCustom = styled(Button)`
    padding: 0 20px;
    &.active {
       border-color: #D37171!important;
       color: #D37171!important;
    }
`;

export default function TagVariantSize({title="", value="", active = false, className="", emitSelect}) {
    return (
        <ButtonCustom className={`border rounded-pill bg-white ${className} ${active ? 'active' : ""}`} variant='light' onClick={() => emitSelect(value)}>
            {title}
        </ButtonCustom>
    )
}