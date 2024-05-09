import Navigation from '../Navigation/Navigation'
import logo from '../../assets/intervine.png'
const Header = () =>{
    return (
        <div className='flex'>
            <img src={logo} alt="logo" className="w-10 " />
            <Navigation />
        </div>
    )
}
export default Header