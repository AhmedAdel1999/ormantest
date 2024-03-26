import { useState } from 'react'
import Heading from "../heading/heading";
import {Accordion,AccordionSummary,AccordionDetails,Typography} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
const FAQ = () =>{

    const [expanded, setExpanded] = useState("panel1")
    const handleChange = (isExpanded,panel) => {
      setExpanded(isExpanded ? panel : false)
    }

    return(
        <section style={{padding:"45px 30px 10px",background:"#fff"}} className="faq-section">
             <Heading text={"أسئلة شائعة"} />
             <div className="allquestions">
                <Accordion
                expanded={expanded === 'panel1'}
                onChange={(_event, isExpanded) => handleChange(isExpanded, 'panel1')}
                sx={{marginBottom:"10px",boxShadow:"none"}}
                >
                <AccordionSummary
                    aria-controls='panel1-content'
                    id='panel1-header'
                    expandIcon={<FontAwesomeIcon icon={faSortDown} />}
                    sx={{
                        background:"#000",color:"#fff",
                        borderRadius:"8px",padding:"0px 60px",
                        fontSize:"25px",
                        "& svg":{
                            color:"#FFC107"
                        }
                    }}
                >
                    <Typography sx={{fontSize:"25px",fontWeight:700}}>ما هي الخدمات التي تقدمها الأرمان ؟</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{
                    background:"#00521C",borderRadius:"8px",color:"#fff",
                    fontSize:"20px",fontWeight:500,lineHeight:"24px"
                }}>
                    <Typography>
                        جمعية الأورمان تقدم المساعدات الموسمية، وهي: توزيع لحوم 
                        الأضاحى، وكراتين رمضان، وبطاطين الشتاء، والمشاركة فى يوم
                        اليتيم. بالإضافة إلى عمل مشروعات تنموية لغير القادرين من الأرامل ومعدومي الدخل،
                        مثل: الأكشاك، ورؤوس المواشي، وتقديم القروض لتمويل المشروعات التنموية
                        المختلفة سواء صناعية او تجارية أو خدمية، وفى المجال الطبى تدعم
                        عمليات القلب والعيون، وتسليم الأجهزة التعويضية والأطراف الصناعية .
                    </Typography>
                </AccordionDetails>
                </Accordion>


                <Accordion
                expanded={expanded === 'panel2'}
                onChange={(_event, isExpanded) => handleChange(isExpanded, 'panel2')}
                sx={{marginBottom:"10px",boxShadow:"none"}}
                >
                <AccordionSummary
                    aria-controls='panel2-content'
                    id='panel2-header'
                    expandIcon={<FontAwesomeIcon icon={faSortDown} />}
                    sx={{
                        background:"#000",color:"#fff",
                        borderRadius:"8px",padding:"0px 60px",
                        fontSize:"25px",
                        "& svg":{
                            color:"#FFC107"
                        }
                    }}
                >
                    <Typography sx={{fontSize:"25px",fontWeight:700}}>
                        
ما هي الأوراق المطلوبة من الجمعيات التي ترغب في التعاون مع الأورمان للاستفادة من خدماتها الخيرية؟
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{
                    background:"#00521C",borderRadius:"8px",color:"#fff",
                    fontSize:"20px",fontWeight:500,lineHeight:"24px"
                }}>
                    <Typography>
                        جمعية الأورمان تقدم المساعدات الموسمية، وهي: توزيع لحوم 
                        الأضاحى، وكراتين رمضان، وبطاطين الشتاء، والمشاركة فى يوم
                        اليتيم. بالإضافة إلى عمل مشروعات تنموية لغير القادرين من الأرامل ومعدومي الدخل،
                        مثل: الأكشاك، ورؤوس المواشي، وتقديم القروض لتمويل المشروعات التنموية
                        المختلفة سواء صناعية او تجارية أو خدمية، وفى المجال الطبى تدعم
                        عمليات القلب والعيون، وتسليم الأجهزة التعويضية والأطراف الصناعية .
                    </Typography>
                </AccordionDetails>
                </Accordion>


                <Accordion
                expanded={expanded === 'panel3'}
                onChange={(_event, isExpanded) => handleChange(isExpanded, 'panel3')}
                sx={{marginBottom:"10px",boxShadow:"none"}}
                >
                <AccordionSummary
                    aria-controls='panel3-content'
                    id='panel3-header'
                    expandIcon={<FontAwesomeIcon icon={faSortDown} />}
                    sx={{
                        background:"#000",color:"#fff",
                        borderRadius:"8px",padding:"0px 60px",
                        fontSize:"25px",
                        "& svg":{
                            color:"#FFC107"
                        }
                    }}
                >
                    <Typography sx={{fontSize:"25px",fontWeight:700}}>ما هي شروط كفالة الاطفال ؟</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{
                    background:"#00521C",borderRadius:"8px",color:"#fff",
                    fontSize:"20px",fontWeight:500,lineHeight:"24px"
                }}>
                    <Typography>
                        جمعية الأورمان تقدم المساعدات الموسمية، وهي: توزيع لحوم 
                        الأضاحى، وكراتين رمضان، وبطاطين الشتاء، والمشاركة فى يوم
                        اليتيم. بالإضافة إلى عمل مشروعات تنموية لغير القادرين من الأرامل ومعدومي الدخل،
                        مثل: الأكشاك، ورؤوس المواشي، وتقديم القروض لتمويل المشروعات التنموية
                        المختلفة سواء صناعية او تجارية أو خدمية، وفى المجال الطبى تدعم
                        عمليات القلب والعيون، وتسليم الأجهزة التعويضية والأطراف الصناعية .
                    </Typography>
                </AccordionDetails>
                </Accordion>


                <Accordion
                expanded={expanded === 'panel4'}
                onChange={(_event, isExpanded) => handleChange(isExpanded, 'panel4')}
                sx={{marginBottom:"10px",boxShadow:"none"}}
                >
                <AccordionSummary
                    aria-controls='panel4-content'
                    id='panel4-header'
                    expandIcon={<FontAwesomeIcon icon={faSortDown} />}
                    sx={{
                        background:"#000",color:"#fff",
                        borderRadius:"8px",padding:"0px 60px",
                        fontSize:"25px",
                        "& svg":{
                            color:"#FFC107"
                        }
                    }}
                >
                    <Typography sx={{fontSize:"25px",fontWeight:700}}>ما هي الاوراق المطلوبة لكفالة طفل يتيم ؟</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{
                    background:"#00521C",borderRadius:"8px",color:"#fff",
                    fontSize:"20px",fontWeight:500,lineHeight:"24px"
                }}>
                    <Typography>
                        جمعية الأورمان تقدم المساعدات الموسمية، وهي: توزيع لحوم 
                        الأضاحى، وكراتين رمضان، وبطاطين الشتاء، والمشاركة فى يوم
                        اليتيم. بالإضافة إلى عمل مشروعات تنموية لغير القادرين من الأرامل ومعدومي الدخل،
                        مثل: الأكشاك، ورؤوس المواشي، وتقديم القروض لتمويل المشروعات التنموية
                        المختلفة سواء صناعية او تجارية أو خدمية، وفى المجال الطبى تدعم
                        عمليات القلب والعيون، وتسليم الأجهزة التعويضية والأطراف الصناعية .
                    </Typography>
                </AccordionDetails>
                </Accordion>
             </div>
        </section>
    )
}
export default FAQ;