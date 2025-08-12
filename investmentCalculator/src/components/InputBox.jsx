const InputBox = ({ label, value, onChangeInput }) => {
    return <div className="flex flex-col">
        <label>{label}</label>
        <input type="number" className="border border-black p-2 bg-white" value={value} onChange={(event) => onChangeInput(Number(event.target.value))} />
    </div>
}
export default InputBox;