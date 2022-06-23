

const Course = (courses) => {
    return(
        <div className="container-course">
                <div className="course-logo-block wow fadeInLeftBig">
                    <img src="img/icon-heading.png" id="course-logo" />
                    <h2 id="course-title">Наші Курси</h2>
                </div>

                <div className="course-list">
                    {
                        courses.courses.courses.map((course) =>
                        <div className="course-list-block wow fadeInDown">
                       <img src="img/img-course.jpg" id="course-list-img" />
                       <div className="course-info">
                           <a href="#" id="course-list-title"><h2>Курс "{course.name}"</h2></a>
                           <div className="course-list-subtitle">
                            <p>{course.description}</p>
                        </div>    
                       </div>
                    </div>
                        )
                    }
                    
                </div>
           </div>
    )
}
export default Course