
const About = () => {
    return(
        <div className="container-about">
           <div className="about-content">
               <img src="/img/about__img.png" className="about-img wow fadeIn" />

                <div className="about-title wow fadeInRightBig">
                    <h1 id="about-title">
                        Чим ми займаємось?
                    </h1>
                   
                <div className="about-subtitle">
                    <p id="about-subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Eget neque, dignissim et feugiat elit augue in suspendisse egestas. 
                        Dictum vestibulum mi et sed nunc, orci fermentum vestibulum, morbi. 
                        Et neque, adipiscing sapien sem senectus praesent aenean consequat. 
                        Aenean facilisi turpis aliquet fringilla. Nunc sem felis sed interdum feugiat mattis elit, sollicitudin. 
                        Quam pharetra rhoncus risus, cursus id elementum aliquet. 
                        Nullam turpis arcu malesuada arcu interdum placerat nisi, lobortis. 
                    </p>

                </div>
                </div>

           </div>

           <div className="about-start">
               <div className="start-title wow fadeInLeftBig">
                   <img src="/img/icon-heading.png" id="start-img" />
                   <h2 id="start-title">Швидкий старт</h2>
               </div>
               
                <p id="start-subtitle">
                    Більше 90% учнів пройшли перший курс,
                    та змогли зібрати свій перший комп'ютер.
                </p>

                <div className="start-infographic">
                    <div className="rectangle-block  wow fadeInLeft">
                        <h1 className="rectangle-title">100%</h1>
                            <img src="/img/Rectangle -100.png" id="rectangle-img-100" />
                                <p id="subtitle-rectangle">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Netus eget velit quisque accumsan amet tortor. 
                                    Velit, volutpat egestas fringilla mi porttitor tempus. 
                                    Placerat dui.
                                </p>
                    </div>
                    <div className="rectangle-block  wow fadeInRight">
                        <h1 className="rectangle-title">75%</h1>
                            <img src="/img/Rectangle-75.png" id="rectangle-img-75" />
                                <p id="subtitle-rectangle">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Netus eget velit quisque accumsan amet tortor. 
                                Velit, volutpat egestas fringilla mi porttitor tempus. 
                                Placerat dui.
                                </p>
                    </div>
                    <div className="rectangle-block  wow fadeInLeft">
                        <h1 className="rectangle-title">50%</h1>
                            <img src="/img/Rectangle-50.png" id="rectangle-img-50" />
                                <p id="subtitle-rectangle">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Netus eget velit quisque accumsan amet tortor. 
                                Velit, volutpat egestas fringilla mi porttitor tempus. 
                                Placerat dui.
                                </p>
                    </div>
                    <div className="rectangle-block  wow fadeInRight">
                        <h1 className="rectangle-title">Підсумок</h1>
                            <img src="/img/Rectangle -total.png" id="rectangle-img-total" />
                                <p id="subtitle-rectangle">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Netus eget velit quisque accumsan amet tortor. 
                                Velit, volutpat egestas fringilla mi porttitor tempus. 
                                Placerat dui.
                                </p>
                    </div>
                </div>
           </div>
        </div>
    )
}
export default About