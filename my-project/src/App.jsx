import Banner from "./components/Banner/Banner"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
const App = () => {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <Banner />
      <Footer />
    </div>
  )
}

export default App