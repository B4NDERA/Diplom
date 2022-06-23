const Teachers = (teachers) => {
    return(
        <div className="container-teachers">
            <div className="teachers-title-block wow fadeInLeftBig">
                <img src="/img/icon-teachers.png" id="teachers-logo" />
                <h1 className="teacher-main-title">Ваші викладачі</h1>
            </div>
            <div className="teachers-content">
                {
                    teachers.teachers.teachers.map((teacher) => 
                        <div className="teachers-content-block wow fadeInLeft">
                            <img src="/img/teachers-img.png" id="teachers-img" />
                            <h4 className="teachers-img-title">{teacher.name}</h4>
                            <h6 className="teachers-img-title">{teacher.surname}</h6>
                            <p className="teachers-img-subtitle">{teacher.position}</p>
                            <button className="teachers-img-btn">Біографія</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default Teachers