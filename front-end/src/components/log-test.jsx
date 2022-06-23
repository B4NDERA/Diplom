import React from'react'
import { Link } from 'react-router-dom'
const Log = () => {

    // const { successMessage, authenticate, error} = useSelector(state => state.auth)

    // const login = (e) => {
    //     e.preventDefault()
    //     dispatch(userLogin(state))
    // }

    return(
        <div className="login">
            <div className="card">
                <div className="card-header">
                <h3>Вхід</h3>
                </div>
                    <div className="card-body">
                            <form >
                                 <div className="form-group">
                                     <label htmlFor="email">Логін</label>
                                     <input type="email" className="form-control" placeholder="example@gmail.com" name="email" id="email"></input>
                                 </div>
                                 <div className="form-group">
                                     <label htmlFor="password">Пароль</label>
                                     <input type="password" className="form-control" name="password" id="password"></input>
                                 </div>
                                 <div className="form-group">
                                     <input type="submit" className="btn" value="Login"></input>
                                 </div>
                                 <div className="form-group">
                                     <span><Link to="/reg">Зареєструвати новий аккаунт</Link></span>
                                 </div>
                            </form>
                    </div>
            </div>
        </div>
    )
    }
export default Log
             