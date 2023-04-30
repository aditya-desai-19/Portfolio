import React from 'react'
import VerticalTimelineCom from '../components/VerticalTimeline';
import SchoolIcon from "@mui/icons-material/School";
import {VerticalTimeline} from "react-vertical-timeline-component";
import WorkIcon from "@mui/icons-material/Work";

const Experience = () => {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineCom 
          date="2016-2018"
          icon={<SchoolIcon />}
          title="Govindram Seksaria P U College"  
          course="Pre-University Course"
          percentage="88%"  
        />
        <VerticalTimelineCom 
          date="2018-2021"
          icon={<SchoolIcon />}
          title="Govindram Seksaria Science College"  
          course="BSc"
          percentage="75%"  
        />
        <VerticalTimelineCom 
          date="2022-2023"
          icon={<SchoolIcon />}
          title="KLS Gogte Institute of Technology"   
          course="MCA"
          percentage="8.2 CGPA"  
        />
        <VerticalTimelineCom 
          date="2023"
          icon={<WorkIcon />}
          title="Apra Labs"   
          course="Intern" 
        />
      </VerticalTimeline>
    </div>
  )
}

export default Experience;