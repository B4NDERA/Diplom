import Course from "../Course/Course"
import Footer from "../Footer/Footer"
import Menu from "../Menu/Menu"
import { useEffect } from "react";
import WOW from "wowjs"

const CoursePage = (courses) => {
    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])
    return(
        <>
        <Menu/>
        <Course courses={courses}/>
        <Footer/>
        </>
    )
}
export default CoursePage