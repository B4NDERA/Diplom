import Header from "../Header/Header"
import About from "../About/About"
import Advantages from "../Advantages/Advantages"
import Program from "../Program/Program"
import Teachers from "../Teachers/Teachers"
import Footer from "../Footer/Footer"

const Landing = (teachers) => {
    return(
        <>
        <Header/>
        <About/>
        <Advantages/>
        <Program/>
        <Teachers teachers={teachers}/>
        <Footer/>
        </>
    )
}
export default Landing
