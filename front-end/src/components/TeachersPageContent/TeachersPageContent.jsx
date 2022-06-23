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
                        teachers.teachers.teachers.map((teacher) =>
                        <div className="teachers-list-block-left wow fadeInRightBig">
                        <div className="teachers-block-img">
                            <img src="/img/teachers-img.png" id="teachers-img" />
                            <h4 className="teachers-img-title">{teacher.name} {teacher.surname}</h4>
                            <p className="teachers-img-subtitle">{teacher.position}</p>
                        </div>
                        <div className="teachers-block-info">
                          <q>{teacher.quote}</q>
                        </div>
                    </div>
                        )
                    }
                    <div className="teachers-block-line"></div>
                    {
                        teachers.teachers.teachers.map((teacher) => 
                        <div className="teachers-list-block-right wow fadeInLeftBig">
                        <div className="teachers-block-info">
                            <q>{teacher.qoute}</q>
                        </div>
                        <div className="teachers-block-img">
                            <img src="/img/teachers-img.png" id="teachers-img" />
                            <h4 className="teachers-img-title">{teacher.name} {teacher.surname}</h4>
                            <p className="teachers-img-subtitle">{teacher.position}</p>
                        </div>
                    </div>
                        )
                    }
                    
                    
                    <div className="teachers-block-line"></div>
                    {/* <div className="teachers-list-block-left wow fadeInRightBig">
                        <div className="teachers-block-img">
                            <img src="/img/teachers-img.png" id="teachers-img" />
                            <h4 className="teachers-img-title">Петро Петренко</h4>
                            <p className="teachers-img-subtitle">Спеціаліст по відеокартам</p>
                        </div>
                        <div className="teachers-block-info">
                            <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Netus eget velit quisque accumsan amet tortor. 
                                Velit, volutpat egestas fringilla mi porttitor tempus. 
                                Placerat dui.</q>
                        </div>
                    </div>
                    <div className="teachers-block-line"></div>
                    <div className="teachers-list-block-right wow fadeInLeftBig">
                        <div className="teachers-block-info">
                            <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Netus eget velit quisque accumsan amet tortor. 
                                Velit, volutpat egestas fringilla mi porttitor tempus. 
                                Placerat dui.</q>
                        </div>
                        <div className="teachers-block-img">
                            <img src="/img/teachers-img.png" id="teachers-img" />
                            <h4 className="teachers-img-title">Петро Петренко</h4>
                            <p className="teachers-img-subtitle">Спеціаліст по відеокартам</p>
                        </div>
                    </div>
                    <div className="teachers-block-line"></div>
                    <div className="teachers-list-block-left wow fadeInRightBig">
                        <div className="teachers-block-img">
                            <img src="/img/teachers-img.png" id="teachers-img" />
                            <h4 className="teachers-img-title">Петро Петренко</h4>
                            <p className="teachers-img-subtitle">Спеціаліст по відеокартам</p>
                        </div>
                        <div className="teachers-block-info">
                            <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Netus eget velit quisque accumsan amet tortor. 
                                Velit, volutpat egestas fringilla mi porttitor tempus. 
                                Placerat dui.</q>
                        </div>
                    </div>
                    <div className="teachers-block-line"></div>
                    <div className="teachers-list-block-right wow fadeInLeftBig">
                        <div className="teachers-block-info">
                            <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Netus eget velit quisque accumsan amet tortor. 
                                Velit, volutpat egestas fringilla mi porttitor tempus. 
                                Placerat dui.</q>
                        </div>
                        <div className="teachers-block-img">
                            <img src="/img/teachers-img.png" id="teachers-img" />
                            <h4 className="teachers-img-title">Петро Петренко</h4>
                            <p className="teachers-img-subtitle">Спеціаліст по відеокартам</p>
                        </div>
                    </div>
                    <div className="teachers-block-line"></div>
                    <div className="teachers-list-block-left wow fadeInRightBig">
                        <div className="teachers-block-img">
                            <img src="/img/teachers-img.png" id="teachers-img" />
                            <h4 className="teachers-img-title">Петро Петренко</h4>
                            <p className="teachers-img-subtitle">Спеціаліст по відеокартам</p>
                        </div>
                        <div className="teachers-block-info">
                            <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Netus eget velit quisque accumsan amet tortor. 
                                Velit, volutpat egestas fringilla mi porttitor tempus. 
                                Placerat dui.</q>
                        </div>
                    </div>
                    <div className="teachers-block-line"></div>
                    <div className="teachers-list-block-right wow fadeInLeftBig">
                        <div className="teachers-block-info">
                            <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Netus eget velit quisque accumsan amet tortor. 
                                Velit, volutpat egestas fringilla mi porttitor tempus. 
                                Placerat dui.</q>
                        </div>
                        <div className="teachers-block-img">
                            <img src="/img/teachers-img.png" id="teachers-img" />
                            <h4 className="teachers-img-title">Петро Петренко</h4>
                            <p className="teachers-img-subtitle">Спеціаліст по відеокартам</p>
                        </div>
                    </div> */}
                </div>
            </div>
    )
}
export default TeachersPageContent