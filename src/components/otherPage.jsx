// import '../styles/otherPage.css';


function OtherPage(props) {
    return (
        <div className="otherPage">
            <div className='main-text'>
                Это страница номер {props.number}!
                <br></br>
                {props.message}
            </div>
        </div>
    )
}


export default OtherPage;
