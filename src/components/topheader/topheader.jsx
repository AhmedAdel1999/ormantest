import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png"
import "./topheader.css"

const TopHeader = () =>{
    return(
        <header className="topnav">
           <ul className="nav-links">
              <li><a href="#">طرق اخري للتبرع</a></li>
              <li><a href="#">حساباتنا في البنوك</a></li>
              <li><a href="#">فروعنا</a></li>
           </ul>
           <div className="nav-btn">
              <button>En</button>
              <a href="#">
                <span>تسجيل دخول</span>
                <FontAwesomeIcon icon={faUser} />
              </a>
           </div>
           <div className="nav-logo">
            <img loading="lazy" alt="logo" src={logo} />
           </div>
        </header>
    )
}
export default TopHeader;