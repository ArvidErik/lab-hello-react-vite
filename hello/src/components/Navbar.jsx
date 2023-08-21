import ironhackLogo from '../assets/ironhack-logo-xs.png'
import navButtonImg from '../assets/menu-top-xs.png'

function Navbar () {
    return (

        <nav>
            <img src={ironhackLogo} alt="ironhack logo" />
            <img id="nav-button" src={navButtonImg} alt="navigation button" />

        </nav>


    );
}

export default Navbar;