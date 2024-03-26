import { useEffect, useState } from "react";
import Heading from "../heading/heading";
import managerImg from "../../assets/manager.jpg"
import {socialMedia} from "../../managersdata";
import axios from "axios";
import "./managers.css"

const Managers = () =>{

    const [managersData,setManagersData] = useState([])
    useEffect(()=>{
       axios.get("https://ormantest.runasp.net/api/SuccessPartener")
       .then((data)=>{
        let finalData = data.data.map((item)=>{
            return{
                ...item,
                imageURL:managerImg,
                ...socialMedia[0]
            }
        })
        setManagersData(finalData)
       }).catch((err)=>{
        setManagersData([])
        window.alert(`${err.message}`)
       })
    },[])
    return(
        <section className="main-manager-container">
            <Heading text={"أعضاء مجلس الإدارة"} />
            <div className="allmanagers">
               {
                managersData.map((item,index)=>{
                    return(
                        <div key={index} className="manager-card">
                            <div className="card-img">
                                <img loading="lazy" alt="card-img" src={item.imageURL} />
                            </div>
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                            <ul>
                                <li><a href={item.link}>{item?.instagramIcon}</a></li>
                                <li><a href={item.link}>{item?.linkedinIcon}</a></li>
                                <li><a href={item.link}>{item?.twitterIcon}</a></li>
                                <li><a href={item.link}>{item?.facebookIcon}</a></li>
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