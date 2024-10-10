import PropType, { array } from 'prop-types';

Left.propType = {
    name: PropType.string, 
    age: PropType.number, 
    phone: PropType.string,
    data: PropType.array, 
    children: PropType.node
}

Left.defaultProps = {
    name: "Tuan",
    age: 28,
    phone: '0798208714',
    array: []
}


function Left({name, age, phone, children, data}) {
    return (
            <div className="left">
                <h1>Hello {name}</h1>
                <h1>age: {age}</h1>
                <h1>phone: {phone}</h1>
                {children}
                <ul>
                {
                   data && data.map((item, index) => (
                        <li key={index}> {item} </li>
                    ))
                }
            </ul>
            </div>
            
    )
}

export default Left;