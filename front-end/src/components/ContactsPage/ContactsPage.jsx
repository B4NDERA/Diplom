import Contacts from "../Contacts/Contacts"
import Footer from "../Footer/Footer"
import Menu from "../Menu/Menu"
import { useEffect } from "react";
import WOW from "wowjs"

const ContactsPage = () => {
    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])
    return(
        <>
        <Menu/>
        <Contacts/>
        <Footer/>
        </>
    )
}
export default ContactsPage