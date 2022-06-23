import { createCourse } from "../../store/actions/Actions"
import {useDispatch} from "react-redux"
const AddCourse = () => {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = [{
            name: e.target[0].value,
            description: e.target[1].value,
        }]
        dispatch(createCourse(data)); 
    }
    return(
        <form className = "admin-teacher-form" onSubmit={handleSubmit}>
                        <input className = "form-input-stl"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Назва курсу"
                        />

                        <textarea name="description" type="text"
                        id="quote" minlength="6" maxlength="255" 
                        placeholder="Опис" required className = "form-input-stl" >
                        </textarea>

                        <button type="submit" id="form-btn">Відправити</button>
                    </form>
    )
}
export default AddCourse