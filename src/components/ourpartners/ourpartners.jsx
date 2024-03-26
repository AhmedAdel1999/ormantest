import Heading from "../heading/heading";
import partner1 from "../../assets/partner-1.png"
import partner2 from "../../assets/partner-2.png"
import partner3 from "../../assets/partner-3.png"
import partner4 from "../../assets/partner-4.png"
import partner5 from "../../assets/partner-5.png"
import partner6 from "../../assets/partner-6.png"
import partner7 from "../../assets/partner-7.png"
import { useMediaQuery } from 'react-responsive'
import { useEffect, useState } from "react";
import "./ourpartners.css"
const OurPartners = () =>{
    let width=0
    let height=0
    const partners = [partner1,partner3,partner2,partner6,partner5,partner7,partner4]
    const isBigger = useMediaQuery({ minWidth: 960 })
    const isSmall = useMediaQuery({ minWidth: 800,maxWidth:960 })
    const isSmaller = useMediaQuery({ minWidth: 560,maxWidth:800 })
    const isSmallest = useMediaQuery({ minWidth: 0,maxWidth:560 })
    const [val,setVal] = useState(50)
    
    useEffect(()=>{
        if(isBigger){setVal(50)}
        if(isSmall){setVal(40)}
        if(isSmaller){setVal(25)}
        if(isSmallest){setVal(15)}
    },[isSmall,isSmaller,isSmallest,isBigger])

    
    return(
        <section className="partners-section">
            <Heading text={"شـركـائـنـا فـى الـنـجـاح"} />
            <div className="allpartners">
            {
                partners.map((item,index)=>{
                    if(index<=3){
                        width+=val
                        height+=val
                    }else{
                        width-=val
                        height-=val
                    }
                    return(
                        <div style={{width:`${width}px`,height:`${height}px`}} key={index} className="item">
                            <img loading="lazy" alt="partner-img" src={item} />
                        </div>
                    )
                })
            }
            </div>
        </section>
    )
}
export default OurPartners;