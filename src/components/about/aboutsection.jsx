import aboutCover from "../../assets/about-cover.png"
import aboutLogo from "../../assets/logo.png"
import about1 from "../../assets/about-1.png"
import about2 from "../../assets/about-2.png"
import "./aboutsection.css"
const AboutSection = () =>{
    return(
        <section>
           <div className="about-cover">
             <img loading="lazy" src={aboutCover} alt="about-cover" />
             <h3>عن الجمعية</h3>
           </div>
           <div className="about-content">
              <div className="content-box">
                <div className="content-box-logo">
                   <img loading="lazy" src={aboutLogo} alt="about-content-logo" />
                </div>
                <p>
                      منظمة مصرية أهلية، غير حكومية، لا تهدف إلى الربح ولا تخضع لضرائب على التبرعات، أنشئت عام 1993 مقيدة برقم 803 مركزية بوزارة التضامن الاجتماعي، تهدف إلى خدمة الفئات الأكثر احتياجًا، دون أي تمييز ديني 
                      أو سياسي، وذلك بشكل مؤسسي متطور ويؤكد دور العمل الأهلي فى تنمية المجتمعات اقتصاديًا واجتماعيًا. تعتمد الجمعية
                      في تمويلها على التبرعات العينية والنقدية من المصريين داخل مصر وخارجها.
                </p>
              </div>
              <div className="imgs-box">
                <div className="first-item">
                    <img loading="lazy" alt="about-1" src={about1} />
                </div>
                <div className="last-item">
                    <img loading="lazy" alt="about-2" src={about2} />
                </div>
              </div>
           </div>
        </section>
    )
}
export default AboutSection;