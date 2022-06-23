import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { userLogin } from "../store/actions/Actions"
import { useNavigate } from 'react-router-dom'
const Log = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    

    const [state, setState] = useState({
        email: "",
        password: "",
    })

    const inputHendle = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }
    // const { successMessage, authenticate, error} = useSelector(state => state.auth)

    const login = (e) => {
        e.preventDefault()
        dispatch(userLogin(state))
        navigate("/")
    }

    return(
        <div className="login">
            <div className="card">
                <div className="card-header">
                <h3>Вхід</h3>
                </div>
                    <div className="card-body">
                            <form onSubmit={login}>
                                 <div className="form-group">
                                     <label htmlFor="email">Email</label>
                                     <input type="email" className="form-control" onChange={inputHendle} value={state.email} placeholder="example@gmail.com" name="email" id="email"></input>
                                 </div>
                                 <div className="form-group">
                                     <label htmlFor="password">Пароль</label>
                                     <input type="password" className="form-control" onChange={inputHendle} value={state.password} name="password" id="password"></input>
                                 </div>
                                 <div className="form-group">
                                     <input type="submit" className="btn" value="Login"></input>
                                 </div>
                                <span className="form-group"><Link to="/reg">Зареєструвати новий аккаунт</Link></span>
                            </form>
                    </div>
            </div>
        </div>
    )
    }
export default Log
             