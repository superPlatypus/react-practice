import '../styles/App.css';
import '../styles/body.css';
import cat from '../images/cat.svg'

function Body() {
    return (
        <div className='body'>
            <img src={cat} className="main-image" alt="main-image" />

            <div className='main-text'>
                Learn React!
            </div>
        </div>
    );
}

export default Body;
