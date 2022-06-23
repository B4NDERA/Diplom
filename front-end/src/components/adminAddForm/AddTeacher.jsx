import { createTeacher } from "../../store/actions/Actions"
const AddTeacher = () => {
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = [{
            firstName: event.target[0].value,
            lastName: event.target[1].value,
            position: event.target[2].value,
            quote: event.target[3].value,
        }]
        
        createTeacher(data)
    }

    return(
        <form className = "admin-teacher-form" onSubmit={handleSubmit}>
                        <input className = "form-input-stl"
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="Прізвище"
                        />

                        <input className = "form-input-stl"
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Ім'я"
                        />

                        <input className = "form-input-stl"
                        id="position"
                        name="position"
                        type="text"
                        placeholder="Спеціальність"
                        />


                        <textarea name="quote" type="text"
                        id="quote" minlength="6" maxlength="255" 
                        placeholder="Цитата" required className = "form-input-stl" >
                        </textarea>

                        <button type="submit" id="form-btn">Відправити</button>
                    </form>
    )
}

export default AddTeacher