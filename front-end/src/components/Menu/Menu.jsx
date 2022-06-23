import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { userLogOut } from "../../store/actions/Actions";
import { useState } from "react";
import {GrClose} from "react-icons/gr"
const Menu = () => {
  const { isAdmin, authenticate, myInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(userLogOut());
  };

  const [isOpenMenu, setOpenMenu ] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation()
    setOpenMenu(prev => !prev)
}

  return (
    <nav className="header-nav">
      <div className="header-logo">
        <Link to="/" className="logo-title">
          <img src="/img/logo.png" id="logo" />
          Build-PC
        </Link>
      </div>
      <div className={isOpenMenu ? "header-menu open" : "header-menu"}>
        <Link to="/" className="menu-links">
          Головна
        </Link>
        <Link to="/course" className="menu-links">
          Курси
        </Link>
        <Link to="/teachers" className="menu-links">
          Викладачі
        </Link>
        <Link to="/contacts" className="menu-links">
          Контакти
        </Link>
        {isAdmin ? (
          <Link to="/admin" className="menu-links">
            Адмін
          </Link>
        ) : (
          <></>
        )}
        {authenticate ? (
          <>
            <>{isAdmin ? <></> : myInfo.login}</>
            <FiLogOut className="menu-links" onClick={logOut} />
          </>
        ) : (
          <Link to="/reg" className="authorization-btn" id="authorization-btn">
            Register
          </Link>
        )}
        <GrClose className="closed" style={{ background: "white", size: '50px' }} onClick={handleClick}/>

      </div>
      <div className="menu-links burger" onClick={handleClick}>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
    </nav>
  );
};
export default Menu;
