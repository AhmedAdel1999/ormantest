import charityMsgimg from "../../assets/msg-cover.jpg"
import Logo from "../../assets/croplogo.png"
import "./charitymsg.css"
const CharityMsg = () =>{
    return(
        <section className="charity-section">
            <img loading="lazy" alt="charity-msg" src={charityMsgimg} />
            <div className="charity-msg">
                <h3>
                    <span>رسالة الجمعية</span>
                    <img loading="lazy" alt="charity-msg-header" src={Logo} />
                </h3>
                <p>
                    تقديم خدمات خيرية نوعية غير تقليدية تستهدف خلال مدى زمني محدد
                    الإنتقال بالشرائح المحتاجة من دائرة الإحتياج إلى دائرة الإنتاج والإكتفاء.
                </p>
            </div>
        </section>
    )
}
export default CharityMsg;