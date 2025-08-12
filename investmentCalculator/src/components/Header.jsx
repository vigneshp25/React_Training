import image from "../assets/image.png"
const Header = () => {
    return <header className="w-[1200px] mx-auto">
        <img className="w-[300px] block mx-auto my-2" src={image} alt="piggybankandcalculator" />
        <h1 className="text-5xl text-center font-bold my-2">Investment Calculator</h1>
    </header>
}
export default Header;