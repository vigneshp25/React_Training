import Banner from "./components/Banner/Banner"
import Card from "./components/Card/Card"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
const App = () => {
  const linkText = ["Read More", "Explorer More", "Show More"]
  return (
    <div className="flex w-full flex-col">
      <Header />
      <Banner />
      <Card linkText={linkText}></Card>
      <Footer />
    </div>
  )
}

export default App