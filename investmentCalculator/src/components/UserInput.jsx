import InputBox from "./InputBox"

const userInputFields = [
    {
        key: "initialInvestment",
        label: "Initial Investment Amount",
    },
    {
        key: "annualInvestment",
        label: "Annual Investment Amount",
    },
    {
        key: "expectedReturn",
        label: "Expected Return Percentage",
    },
    {
        key: "duration",
        label: "Duration of holding in Years",
    },
];

const UserInput = ({onChangeValue, userInputValues}) => {
    return <section className="w-[800px] mx-auto grid grid-cols-2 gap-10 my-10 py-10 px-10 border border-black bg-blue-50">
        {userInputFields.map((item) => {
            return <InputBox key={item.key} label={item.label} value={userInputValues[item.key]} onChangeInput={(value)=> onChangeValue(item.key,value)} />
        })}
    </section>
}

export default UserInput;