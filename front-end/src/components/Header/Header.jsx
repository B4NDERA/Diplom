import Menu from "../Menu/Menu"
const Header = () => {
    return(
        <header className="main-header">
            <div className="container-main">
                <Menu/>           
            </div>
            <div className="main-title wow fadeInLeftBig"><h1 id="main-title">Перший курс по комп'ютерній збірці</h1></div>         
        </header>
        
    )
}
export default Header