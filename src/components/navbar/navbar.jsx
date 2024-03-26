import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faCalculator, faSortDown } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png"
import "./navbar.css"

const Navbar = () =>{
    return(
        <nav className="navbar">
            <div className="logo">
                <img loading="lazy" alt="log" src={logo} />
            </div>
            <ul className="navigations">
                <li><a href="#">الصفحة الرئيسية</a></li>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faSortDown} />
                        <span>انشطة الأورمان</span>
                    </a>
                </li>
                <li><a className="active" href="#">عن الأورمان</a></li>
                <li><a href="#">أخبارنا</a></li>
            </ul>
            <div className="btn-group">
                  <button>حقق الحلم</button>
                  <button>إتبرع الأن</button>
                  <button>
                    <FontAwesomeIcon icon={faCalculator} />
                    <span>احسب زكاتك</span>
                  </button>
            </div>
        </nav>
    )
}
export default Navbar;