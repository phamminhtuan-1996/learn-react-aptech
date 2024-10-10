
import Left from './Left'
import Center from './Center'
import Right from './Right'

function Container() {
    const listItem = [
        'item1',
        'item2',
        'item3',
        'item4',
        'item5',
    ]
    return (
        <div className="container">
            <Left data={listItem}>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus nam, quis, autem commodi quidem dolorem veritatis suscipit possimus repellat natus tempore, illum dignissimos aperiam! Expedita explicabo cumque et. Possimus, similique?
                </p>
            </Left>
            <Left name="Tèo" age={29}  phone="0798208715">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus nam, quis, autem commodi quidem dolorem veritatis suscipit possimus repellat natus tempore, illum dignissimos aperiam! Expedita explicabo cumque et. Possimus, similique?
                </p>
            </Left>
            <Left name="Tí" age={30}  phone="0798208716" >
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus nam, quis, autem commodi quidem dolorem veritatis suscipit possimus repellat natus tempore, illum dignissimos aperiam! Expedita explicabo cumque et. Possimus, similique?
                </p>
            </Left>
        </div>
    )
}

export default Container;