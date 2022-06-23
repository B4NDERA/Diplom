import React, { useState, useEffect }  from "react"
import { Link } from "react-router-dom"
// import { useDispatch, useSelector } from "react-redux"
import { userRegister } from "../../store/actions/Actions"
// import { SUCCESS_MESSAGE_CLEAR, ERROR_MESSAGE_CLEAR } from "../../store/types/authTypes"

const Register = () => {
    // const navigate = useNavigate()
    // const { successMessage, authenticate, error} = useSelector(state => state.auth)

    // const [checked, setX] = useState(false)

    // const soldCheckbox = ({ target: { checked } }) => {
    //     setX(checked)
    // }

    // const [state, setstate] = useState({
    //     userName: "",
    //     password: "",
    //     confirmPassword: "",
    // })

    // const inputHendle = (e) => {
    //     setstate({
    //         ...state,
    //         [e.target.name] : e.target.value
    //     })
    // }

    // const dispatch = useDispatch()

    const register = e => {
        const {userName, password, confirmPassword} = state

        const formData = new FormData()
        formData.append("userName", userName)
        formData.append("password", password)
        formData.append("confirmPassword", confirmPassword)

        if(checked === true) {
            dispatch(userRegister(formData))
        } else {
            console.log("Please Agree to Privacy Policy")
        }
        
        e.preventDefault()
    }
    
    // useEffect(() => {
        // if(authenticate) {
        //     navigate("/")
        // }
       
        // if(successMessage) {
        //     alert.success(successMessage)
        //     dispatch({
        //         type: SUCCESS_MESSAGE_CLEAR
        //     })
        // }
        // if(error) {
        //     error.map(err => alert.error(err))
        //     dispatch({
        //         type: ERROR_MESSAGE_CLEAR
        //     })
        // }
    // }, [successMessage, error])

    return (
        <div className="register">
            <div className="card">
                <div className="card-header">
                    <h3>Register</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={register} method="post">
                        <div className="form-group">
                            <label htmlFor="username">User Name</label>
                            <input type="text"  className="form-control" placeholder="Alex" id="username"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Email</label>
                            <input type="email"  className="form-control" placeholder="example@gmail.com" id="email"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password"  className="form-control" placeholder="*****" id="password"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Confirm Password</label>
                            <input type="password"  className="form-control" placeholder="*****" id="confirmPassword"></input>
                        </div>
                        <div>
                            <input type="checkbox"  />
                            <label htmlFor="privacy">I Agree to Privacy Policy</label>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="register" className="btn"></input>  
                        </div>
                        <div className="form-group">
                            <span><Link to="/login">Login Your Account</Link></span>  
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register