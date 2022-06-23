import { createFeedback } from "../../store/actions/Actions"

const Contacts = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = [{
            name: e.target[0].value,
            surname: e.target[1].value,
            phone: e.target[2].value,
            email: e.target[3].value,
            message: e.target[4].value,
        }]
        createFeedback(data)
    }
    return(
        <div className="container-contacts">
            <div className="contacts-title-block wow fadeInLeftBig">
                <img src="/img/icon-heading-prog.png" id="contacts-logo" />
                <h1 className="contacts-title">Контакти</h1>
            </div>

            <div className="contacts-content">
                <form onSubmit={handleSubmit} className="contacts-form wow fadeInLeftBig">
                    <h1 className="contacts-form-title wow fadeInDown">Напишіть нам</h1>

                    <input type="text" name="surname" id="surname" className="contacts-form-input" placeholder="Прізвище" required />
                    <input type="text" name="name" id="name" className="contacts-form-input" placeholder="Ім'я" required />
                    <input type="phone" name="phone" id="phone" className="contacts-form-input" placeholder="Номер телефону" required />
                    <input type="email" name="email" id="email" className="contacts-form-input" placeholder="Email (необов'язково)" />
                    <textarea name="message" className="contacts-textarea" id="message" minlength="6" maxlength="255" placeholder="Пишіть тут......." required ></textarea>
                    <button name="submit" className="contacts-btn">Відправити</button>
                </form>
                <div className="contacts-line wow fadeInUp"></div>
                <div className="contacts-info wow fadeInRightBig">
                    <p>Email: <a href="#" className="contacts-email-link">example@gmai.com</a> , <a href="#" className="contacts-email-link">example@gmai.com</a></p>
                    <br />
                    <br/ >
                    <p>Телефон: +38(068)000000, +38(099)000000, +38(066)000000</p>
                    <br />
                    <br />
                    <p>Сервісні центри: 
                    <br />
                         м. Тернопіль, вул. Центральна, буд. 28, Сервісний центр "Build-PC", 
                    <br />
                         м. Рівне, вул. Центральна, буд. 16, Сервісний центр "Build-PC"
                    </p>
                    <br />
                    <br />
                    <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1293.6614431050775!2d25.64215558365006!3d49.57279802733592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x88f8fbc52da09e43!2zNDnCsDM0JzIyLjEiTiAyNcKwMzgnMzQuNiJF!5e0!3m2!1sru!2sua!4v1652193689207!5m2!1sru!2sua" className = "contact-map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                </div>
            </div>
        </div>
    )
}
export default Contacts