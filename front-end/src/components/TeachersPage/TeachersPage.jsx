import Footer from "../Footer/Footer"
import Menu from "../Menu/Menu"
import TeachersPageContent from "../TeachersPageContent/TeachersPageContent"
import { useEffect } from "react";
import WOW from "wowjs"


const TeachersPage = (teachers) => {
    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])
    
    return(
        <>
        <Menu/>
        <TeachersPageContent teachers={teachers}/>
        <Footer/>
        </>
    )
}
export default TeachersPage