import logo from "../../assets/croplogo.png"
import vesion1 from "../../assets/vesion-1.jpg"
import vesion2 from "../../assets/vesion-2.jpg"
import vesion3 from "../../assets/vesion-3.png"
import vesion4 from "../../assets/vesion-4.jpg"
import vesion5 from "../../assets/vesion-5.jpg"
import "./charityvesion.css"
const CharityVesion = () =>{
    return(
        <section className="main-container">
            <div className="vesion-box">
                <h3>
                    <span>رؤية الجمعية</span>
                    <img loading="lazy" alt="vesion-img" src={logo} />
                </h3>
                <p>
                    الانتقال بمفهوم العمل الخيري التطوعي من مجرد الدور الكمالى والمشبع لغريزة العطاء عند بعض 
                    الشرائح إلى أن يصبح عمل مؤسسى تنموى منظم يتم بشكل احترافى وينطلق من تحقيق 
                    أهدافه من ثقة المتبرعين وجدية المستفيدين وخبرة وكفاءة القائمين عليه.
                </p>
            </div>
            <div className="vesion-imgs">
                {
                    [vesion1,vesion2,vesion3,vesion4,vesion5].map((item,index)=>{
                        return(
                            <div key={index} className={`item${index+1}`}>
                                <img loading="lazy" alt={`vesion${index+1}-img`} src={item}  />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default CharityVesion;