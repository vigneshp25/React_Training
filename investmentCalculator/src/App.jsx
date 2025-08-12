import Header from "./components/Header"
import UserInput from "./components/UserInput"
import { useState } from "react"

function App() {
  const [userInputValues, SetUserInputValues] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleChange(key,value){
    SetUserInputValues( pre => {
      return {
        ...pre,
        [key]: value,
      }
    })
  }
  return (
    <>
      <Header />
      <UserInput userInputValues={userInputValues} onChangeValue={handleChange}/>
    </>
  )
}

export default App
