import { createMailingList } from "../../store/actions/Actions"
const Footer = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = [{
            email: e.target[0].value
        }]
        createMailingList(data)
    }
    return(
        <div className="container-footer">
            <div className="footer-content">
                <h1 className="footer-title wow fadeInDown">Пости кожен тиждень</h1>
                    <p className="footer-subtitle wow fadeInUp">Більше 90% учнів пройшли повний курс та змогли зібрати свій перший комп'ютер</p>
                     <form onSubmit={handleSubmit} className="footer-form wow fadeInDown">   
                    <input type="text" className="footer-email-lable" placeholder="Email..." name="email" id="email"/>
                    <button type="submit" className="footer-email-btn">Підписатись</button>
                    </form>
            </div>
                <div className="footer-links-block">
                    <div className="footer-links wow fadeInLeft"><a href="#" className="footer-links-btn"><img src="/img/vk.png" id="footer-link" /></a></div>
                    <div className="footer-links wow fadeInUp"><a href="#" className="footer-links-btn"><img src="/img/youtube.png" id="footer-link" /></a></div>
                    <div className="footer-links wow fadeInDown"><a href="#" className="footer-links-btn"><img src="/img/facebook.png" id="footer-link" /></a></div>
                    <div className="footer-links wow fadeInRight"><a href="#" className="footer-links-btn"><img src="/img/instagram.png" id="footer-link" /></a></div>
                </div>
                <p className="footer-rights">&#169; 2022. Всі права захищені.</p>
        </div>
    )
}
export default Footer