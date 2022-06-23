import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
const Menu = () => {
    const { isAdmin } = useSelector(state => state.auth)
    return(
        <nav className="header-nav">
            <div className="header-logo">
               <Link to="/" className="logo-title"><img src="/img/logo.png" id="logo"/>Build-PC</Link> 
            </div>

            <div className="header-menu">
                <Link to="/" className="menu-links">Головна</Link>
                <Link to="/course" className="menu-links">Курси</Link>
                <Link to="/teachers" className="menu-links">Викладачі</Link>
                <Link to="/contacts" className="menu-links">Контакти</Link>
                {
                    isAdmin ? <Link to="/admin" className="menu-links">Адмін</Link> : <></>
                }
            </div>

           

            <div>
                <Link to="/reg" className="authorization-btn" id="authorization-btn"> Особистий кабінет</Link>
            </div>
        </nav>
    )
}
export default Menu