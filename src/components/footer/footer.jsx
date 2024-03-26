import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { socialMedia } from "../../managersdata";
import logo from "../../assets/logo.png"
import axios from "axios";
import "./footer.css"


const Footer = () =>{

    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [email,setEmail] = useState("")
    const [msgHeader,setMsgHeader] = useState("")
    const [msgContent,setMsgContent] = useState("")

    const handleSubmit = (e) =>{
       e.preventDefault()
       if(!name || !phone || !email || !msgContent || !msgHeader){
          window.alert("you have too fill all inputs first")
       }else{
           axios.post("http://ormantest.runasp.net/api/ContactUs",{
            name,email,phone,msgContent,msgHeader
           }).then((msg)=>{
              window.alert("your message was sent successfully")
           }).catch((err)=>{
              window.alert(`${err.message}`)
           })
       }
    }
    return(
        <footer>
            <div className="footer-container">
                <div className="general-info">
                   <div className="footer-logo"><img loading="lazy" alt="footer-logo" src={logo} /></div>
                   <p>جمعية خيرية مصرية مقيدة برقم803 مركزية عام 1993</p>
                   <h3>
                      <span>19455</span>
                      <FontAwesomeIcon icon={faPhone} />
                   </h3>
                   <ul>
                     <li><a href="#">{socialMedia[0].instagramIcon}</a></li>
                     <li><a href="#">{socialMedia[0].linkedinIcon}</a></li>
                     <li><a href="#">{socialMedia[0].facebookIcon}</a></li>
                     <li><a href="#">{socialMedia[0].twitterIcon}</a></li>
                   </ul>
                </div>
                <div className="important-links">
                    <h4>أهم الروابط</h4>
                    <ul>
                        <li>الأسئلة الشائعة</li>
                        <li>الحسابات البنكية للجمعية</li>
                        <li>طرق التبرع</li>
                        <li>شركاء النجاح</li>
                        <li>فروعنا</li>
                    </ul>
                </div>
                <div className="contact-us">
                    <h4>تواصل معنا</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="inputs-group">
                            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" name="name" placeholder="الاســـــــــــــــم" />
                            <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="text" name="phone" placeholder="رقم المحمول" />
                        </div>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder="البريد الاليكتروني" />
                        <input value={msgHeader} onChange={(e)=>setMsgHeader(e.target.value)} type="text" name="msgHeader" placeholder="عنوان الرسالة" />
                        <textarea value={msgContent} onChange={(e)=>setMsgContent(e.target.value)} type="text" name="msgContent" placeholder="استفسارك" />
                        <div className="submit-btn">
                            <button type="submit">إرسال</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="copywrite">جميع الحقوق محفوظة جمعية الأورمان - © 2023</div>
        </footer>
    )
}
export default Footer;