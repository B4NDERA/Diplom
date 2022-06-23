import Menu from "../Menu/Menu"
import { useSelector, useDispatch } from "react-redux";
const Header = () => {
    // const dispatch = useDispatch();
    // const [ isAdmin ] = useSelector(state => state.auth)

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