import Logo from '../images/logo.svg'
import '../styles/header.css';
import Navbar from "./navbar";

function Header() {
    return (
        <header className='header'>
            <img src={Logo} className='header-image' alt='header-image'/>
            <Navbar/>
        </header>
    );
}

export default Header;
