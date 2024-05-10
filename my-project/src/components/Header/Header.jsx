import Navigation from '../Navigation/Navigation'
import logo from '../../assets/intervine.png'
const Header = () =>{
    return (
        <div className='flex justify-between w-8/12 mx-auto'>
            <img src={logo} alt="logo" className="w-32 " />
            <Navigation />
        </div>
    )
}
export default Header