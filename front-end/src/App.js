import Landing from "./components/Landing/Landing";
import CoursePage from "./components/CoursePage/CoursePage";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import TeachersPage from "./components/TeachersPage/TeachersPage";
import ContactsPage from "./components/ContactsPage/ContactsPage";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import Reg from "./components/reg-test";
import Log from "./components/log-test";
import { useSelector, useDispatch } from "react-redux";
import { getTeachers, getCourse } from "./store/actions/Actions"
import { useEffect } from "react";
import WOW from "wowjs"

const App = () => {
  const dispatch = useDispatch();
  const { teachers, courses } = useSelector(state => state.admin)

  useEffect(() => {
    dispatch(getTeachers());
    dispatch(getCourse());
  }, []) 

  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])

  return(
    
    <Routes>
      <Route path = "/" element = {<Landing teachers={teachers}/>}/>
      <Route path = "/course" element = {<CoursePage courses={courses}/>}/>
      <Route path = "/teachers" element = {<TeachersPage teachers={teachers}/>}/>
      <Route path = "/contacts" element = {<ContactsPage/>}/>
      <Route path = "/admin" element = {<AdminPanel/>}/>
      <Route path = "/reg" element = {<Reg/>}/>
      <Route path = "/log" element = {<Log/>}/>
    </Routes>
    
  )
}

export default App;
