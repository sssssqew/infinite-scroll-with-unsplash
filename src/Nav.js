import Button from './Button'
import './Nav.css'

function Nav(){
    const navigate = (url) => {
        window.location.href = url
    }
    return (
        <div className="nav-container">
            <Button handleClick={() => navigate("https://google.com")}>구글</Button>
            <Button handleClick={() => navigate("https://naver.com")}>네이버</Button>
        </div>
    )
}

export default Nav