import '../styles/navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div className='navbar' id = 'links'>
            {/*<div>навбар</div>*/}
            <Link className="link" to="/">Главная</Link>
            <Link className="link" to="/second">Вторая</Link>
            <Link className="link" to="/third">Третья</Link>
        </div>
    );
}


export default Navbar;
