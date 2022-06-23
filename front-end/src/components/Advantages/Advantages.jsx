const Advantages = () => {
   const border = {
    border: "1px solid #6b6b6b"
   }
    return(
        <div className="container-advantages">
            <h1 className="advantages-main-title wow fadeInDown">Отримайте професію прямо зараз</h1>

            <div className="advantages-content">
                <div className="advantages-content-block  wow fadeInLeft">
                    <img src="/img/icon-1.png" id="advantages-img" />
                        <h3 id="advantages-title">Тільки практичні навики в роботі</h3>
                            <p id="advantages-subtitle">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Netus eget velit quisque accumsan amet tortor. 
                                Velit, volutpat egestas fringilla mi porttitor tempus. 
                                Placerat dui.
                            </p>
                </div>
                <div className="advantages-content-block  wow fadeInUp">
                    <img src="/img/icon-2.png" id="advantages-img" />
                        <h3 id="advantages-title">Робота на самому новітньому обладнанні</h3>
                            <p id="advantages-subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Netus eget velit quisque accumsan amet tortor. 
                            Velit, volutpat egestas fringilla mi porttitor tempus. 
                            Placerat dui.
                            </p>
                </div>
                <div className="advantages-content-block  wow fadeInRight">
                    <img src="/img/icon-3.png" id="advantages-img" />
                        <h3 id="advantages-title">Сертифікаця по закінченню навчання</h3>
                            <p id="advantages-subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Netus eget velit quisque accumsan amet tortor. 
                            Velit, volutpat egestas fringilla mi porttitor tempus. 
                            Placerat dui.
                            </p>
                </div>
            </div>
            <div className="advantages-line"></div>

            <div className="partners-title-block wow fadeInLeftBig">
                <img src="/img/Ellipse 1 (Stroke).png" id="partners-img" />
                <h1 id="partners-title">Партнери та топ-бренди</h1>
            </div>

            <div className="partner-logos-block">
                <div className="partner-logos">
                    <div className="partner-logos-img wow fadeInLeft" ><img src="/img/logo-partner.png" id="partner-logos-img" /></div>
                    <div className="partner-logos-img wow fadeInDown" ><img src="/img/logo-partner.png" id="partner-logos-img" /></div>
                    <div className="partner-logos-img wow fadeInDown" ><img src="/img/logo-partner.png" id="partner-logos-img" /></div>
                    <div className="partner-logos-img wow fadeInRight" ><img src="/img/logo-partner.png" id="partner-logos-img" /></div>
                    <div className="partner-logos-img wow fadeInLeft" ><img src="/img/logo-partner.png" id="partner-logos-img" /></div>
                    <div className="partner-logos-img wow fadeInUp" ><img src="/img/logo-partner.png" id="partner-logos-img" /></div>
                    <div className="partner-logos-img wow fadeInUp" ><img src="/img/logo-partner.png" id="partner-logos-img" /></div>
                    <div className="partner-logos-img wow fadeInRight" ><img src="/img/logo-partner.png" id="partner-logos-img" /></div>
                </div>
            </div>
        </div>
    )
}
export default Advantages