import React from'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux/es/exports'
import { userRegister } from '../store/actions/Actions'
const Reg = () => {

    const dispatch = useDispatch();

    const [state, setstate] = useState({
        login: "",
        password: "",
        confirmPassword: "",
        email: "",
    })

    const [isAdmin, setAdmin] = useState(false)

    const inputHendle = (e) => {
        setstate({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const register = e => {
        e.preventDefault()
        const {login, password, email, confirmPassword} = state

        if (email === "admin@gmail.com") {
            setAdmin(true)
        }
        
        const data = {
            login: login,
            email: email,
            password: password,
            isAdmin: isAdmin
        }

        if (confirmPassword === password) {
            dispatch(userRegister(data));
        }
    }
    return(
        <div className="register">
            <div className="card">
                <div className="card-header">
                    <h3>Реєстрація</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={register}>
                        <div className="form-group">
                            <label htmlFor="login">Логін</label>
                            <input type="text"className="form-control"
                            placeholder="Логін" id='login'
                            onChange={inputHendle} name="login" value={state.login}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Email</label>
                            <input type="email"  className="form-control" 
                            placeholder="example@gmail.com" id="email"
                            onChange={inputHendle} name="email" value={state.email}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Пароль</label>
                            <input type="password"  className="form-control" 
                            placeholder="" id="password" minLength= "6"
                            onChange={inputHendle} name="password" value={state.password}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Підтвердити пароль</label>
                            <input type="password"  className="form-control" 
                            placeholder="" id="confirmPassword"
                            onChange={inputHendle} name="confirmPassword" value={state.confirmPassword}></input>
                        </div>
                        <div>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Зареєструватися" className="btn"></input>  
                        </div>
                        <div className="form-group">
                            <span><Link to="/log">Увійти в аккаунт</Link></span>  
                        </div>
                    </form>                                                  
                </div>
            </div>
        </div>
    )
    }
export default Reg
             