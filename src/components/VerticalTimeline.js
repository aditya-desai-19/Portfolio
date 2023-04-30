import React from "react";
import {VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


const VerticalTimelineCom = (props) => {
  return (
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date={props.date}
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={props.icon}
        >
            <h3 className="vertical-timeline-element-title">
                {props.title}
            </h3>
            <p style={{ color: "black" }}>{props.course}</p>
            <p style={{ color: "black" }}>{props.percentage}</p>
        </VerticalTimelineElement>
  );
};

export default VerticalTimelineCom;
