import image from "../assets/image.png"
const Header = () => {
    return <header className="w-[1200px] mx-auto">
        <img className="w-[300px] block mx-auto my-2" src={image} alt="piggybankandcalculator" />
        <h1 className="text-5xl text-center uppercase font-bold my-4 
bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 
bg-clip-text text-transparent tracking-wide drop-shadow-md">
            Investment Calculator
        </h1>

    </header>
}
export default Header;