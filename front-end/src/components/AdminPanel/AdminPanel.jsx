// import { createTeacher } from "../../store/actions/Actions"
import { useState } from "react"
import AddTeacher from "../adminAddForm/AddTeacher"
import AddCourse from "../adminAddForm/AddCourse"
import { Link } from "react-router-dom"
const AdminPanel = () => {
    const options = [
        {
            option: "Курси", form: "course"
        },

        {
            option: "Викладачі", form: "teacher"
        },
    ]

    const [form, setForm] = useState("teacher");

    const openForm = e => {
        setForm(e)
        console.log(e);
    }

    return (
        <div className="container-admin">
            <div className="admin-block">
                <h1 className="admin-panel-title">Адмін Панель</h1>
                <div className="admin-subtitle-line"></div>

                <ul className="admin-menu">
                    {
                        options.map((opt,i) =>
                            <li className="admin-menu-links"  ><a onClick={()=>openForm(opt.form)}>{opt.option}</a></li>
                        )
                    }
                </ul>
            </div>

            <div className="admin-content-block">
                <Link to="/"><h1 className="admin-content-title">Build-PC</h1></Link>
                <div className="admin-content-line"></div>
                <h1>{form}</h1>
                {
                    form === "teacher" ? <div className="admin-content">
                    <AddTeacher/>
                    </div> : form === "course" ? <div className="admin-content">
                    <AddCourse/>
                    </div> : <></>         
                }
                    
            </div>
        </div>
    )
}
export default AdminPanel