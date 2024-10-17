export default function InputField({onInputField}) {
    const handleInput = (e) => {
        onInputField(e.target.value);
    }
    return (
        <input type="text" onChange={handleInput}/>
    )
}
