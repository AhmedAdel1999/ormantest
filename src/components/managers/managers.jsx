import Heading from "../heading/heading";
import {managersData} from "../../managersdata";
import "./managers.css"
const Managers = () =>{
    return(
        <section className="main-manager-container">
            <Heading text={"أعضاء مجلس الإدارة"} />
            <div className="allmanagers">
               {
                managersData.map((item,index)=>{
                    return(
                        <div key={index} className="manager-card">
                            <div className="card-img"><img loading="lazy" alt="card-img" src={item.imageURL} /></div>
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                            <ul>
                                <li><a href={item.link}>{item.instagramIcon}</a></li>
                                <li><a href={item.link}>{item.linkedinIcon}</a></li>
                                <li><a href={item.link}>{item.twitterIcon}</a></li>
                                <li><a href={item.link}>{item.facebookIcon}</a></li>
                            </ul>
                        </div>
                    )
                })
               }
            </div>
        </section>
    )
}
export default Managers;