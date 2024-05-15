import Banner from "./components/Banner/Banner"
import Card from "./components/Card/Card"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
const App = () => {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <Banner />
      <Card linkText="Read More"></Card>
      <Footer />
    </div>
  )
}

export default App