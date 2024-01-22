import './Navbar.scss'
import logo from '../../assets/Image/secondary_light.9d2bb836.svg'
import {useTranslation} from "react-i18next"

export default function Navbar() {

const {t, i18n} = useTranslation()

const handleChange = (e) => {
 i18n.changeLanguage(e.target.value);
}
 

  return (


    <div>
      <div className="nav">
        <div className="navbar">
          <div className="navbar-left">
            <img className='logo' src={logo} alt="" />
            <ul className='navbar-ul'>
              <li className='navbar-li'><a className='navbar-li' href="#">{t("Tutors")}</a></li>
              <li className='navbar-li'><a className='navbar-li' href="#">{t("Courses")}</a></li>
              <li className='navbar-li'><a className='navbar-li' href="#">{t("Group Lessons")}</a></li>
              <li className='navbar-li'><a className='navbar-li' href="#">{t("Resources")}</a></li>
              <li className='navbar-li'><a className='navbar-li' href="#">{t("Kids")}</a></li>
              <li className='navbar-li'><a className='navbar-li' href="#">{t("Business")}</a></li>
            </ul>
          </div>
          <div className="navbar-right">
          <select id='cars' onChange={(e) => handleChange(e)}>
            <option value="en">English</option>
            <option value="uz">Uzb</option>
          </select>
         
          <a href="/login" className='navbar-button white'> {t("LogIn")}</a>
          <button className='navbar-button yellow'>{t("SignUp")}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
