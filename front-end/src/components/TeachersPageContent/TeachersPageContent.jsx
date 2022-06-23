const TeachersPageContent = (teachers) => {
    console.log(teachers);
    return(
        <div className="container-teachers-page">
                <div className="teachers-title-block wow fadeInLeftBig">
                    <img src="/img/icon-teachers.png" id="teachers-logo" />
                    <h1 className="teacher-main-title">Викладачі</h1>
                </div>

                <div className="teachers-list">
                    {
                        teachers.teachers.teachers.map((teacher, i) => 
                        <>
                        <div className={` wow ${i%2===0 ? "fadeInRightBig teachers-list-block-left" : "fadeInLeftBig teachers-list-block-right"}` }>
                            <div className="teachers-block-img">
                                <img src="/img/teachers-img.png" id="teachers-img" />
                                <h4 className="teachers-img-title">{teacher.name} {teacher.surname}</h4>
                                <p className="teachers-img-subtitle">{teacher.position}</p>
                            </div>
                            <div className="teachers-block-info">
                            <q>{teacher.quote}</q>
                            </div>
                        </div>
                        <div className="teachers-block-line"></div>
                        </>
                        )
                    }
                </div>
            </div>
    )
}
export default TeachersPageContent