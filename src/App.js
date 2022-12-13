import './App.css';
import timelineElements from './timelineElements';
import octTimelineElements from './octTimelineElements';
import novTimelineElements from './novTimelineElements';
import decTimelineElements from './decTimelineElements';
import {FaUserFriends} from 'react-icons/fa';
import { ReactComponent as SchoolIcon } from "./svgs/school.svg";
import { ReactComponent as Graph } from "./svgs/calgraphs.svg"
import { ReactComponent as SepMood } from "./svgs/bar graphs/Mood (Sep).svg";
import { ReactComponent as SepLoc } from "./svgs/bar graphs/pi graphs/Locations (Sep).svg";
import { ReactComponent as OctMood } from "./svgs/bar graphs/Mood (Oct).svg";
import { ReactComponent as OctLoc } from "./svgs/bar graphs/pi graphs/Location (Oct).svg";
import { ReactComponent as NovMood } from "./svgs/bar graphs/Mood (Nov).svg";
import { ReactComponent as NovLoc } from "./svgs/bar graphs/pi graphs/Location (Nov).svg";
import { ReactComponent as DecMood } from "./svgs/bar graphs/Mood (Dec).svg";
import { ReactComponent as DecLoc } from "./svgs/bar graphs/pi graphs/Location (Dec).svg";

import{VerticalTimeline, 
  VerticalTimelineElement
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css"

function App() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };
  <div>
    <graph1/>
  </div>
  return (
  <div>
    <h1 className = "title">BePrinceton.</h1>
    <h2>BeReal images are images that are taken at a random time whenever the app chooses to go off. <br>
    </br>
      The images include both the front and the back camera. Each BeReal image contains information on the date, location, people, and my general mood.
      <br></br>Both images are condensed into one with the top left including the front camera. <br>
      </br>
      This project represents the BeReals I've taken at Princeton
      and displays them in a timeline order. 
    </h2>
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"></link>
    
    
    <h1>September:</h1>
    <VerticalTimeline>
      {
        timelineElements.map(element => {
          let isWorkIcon = element.icon === "friends"
          return(
            <VerticalTimelineElement
            key = {element.key}
            date = {element.date}
            dateClassName = "date"
            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
            icon = {isWorkIcon ? <FaUserFriends /> : <SchoolIcon />}
            >
            <h3 className='vertical-timeline-element-title'>
                {element.title}
            </h3>
            <img src = {element.image} alt = "BeReals!" width = "100%" height = "100%"></img>
            <h5 className='vertical-timeline-element-subtitle'>
                Location: {element.location}
            </h5>
            <h5 className='moods'>
                Mood: {element.mood}
            </h5>
            <p id = "description">{element.description }</p>
            </VerticalTimelineElement>
        
          );
        })}
    </VerticalTimeline>
    <h1>September Stats</h1>
    <div2 className = "graph">
      <SepMood />
    </div2>
    <div2 className = "graph">
      <SepLoc />
    </div2>
    <h1>October:</h1>
    <VerticalTimeline>
      {
        octTimelineElements.map(element => {
          let isWorkIcon = element.icon === "friends"
          return(
            <VerticalTimelineElement
            key = {element.key}
            date = {element.date}
            dateClassName = "date"
            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
            icon = {isWorkIcon ? <FaUserFriends /> : <SchoolIcon />}
            >
            <h3 className='vertical-timeline-element-title'>
                {element.title}
            </h3>
            <img src = {element.image} alt = "BeReals!" width = "100%" height = "100%"></img>
            <h5 className='vertical-timeline-element-subtitle'>
                Location: {element.location}
            </h5>
            <h5 className='moods'>
                Mood: {element.mood}
            </h5>
            <p id = "description">{element.description }</p>
            </VerticalTimelineElement>
        
          );
        })}
    </VerticalTimeline>
    <h1>October Stats</h1>
    <div2 className = "graph">
      <OctMood />
    </div2>
    <div2 className = "graph">
      <OctLoc />
    </div2>
    <h1>November:</h1>
    <VerticalTimeline>
      {
        novTimelineElements.map(element => {
          let isWorkIcon = element.icon === "friends"
          return(
            <VerticalTimelineElement
            key = {element.key}
            date = {element.date}
            dateClassName = "date"
            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
            icon = {isWorkIcon ? <FaUserFriends /> : <SchoolIcon />}
            >
            <h3 className='vertical-timeline-element-title'>
                {element.title}
            </h3>
            <img src = {element.image} alt = "BeReals!" width = "100%" height = "100%"></img>
            <h5 className='vertical-timeline-element-subtitle'>
                Location: {element.location}
            </h5>
            <h5 className='moods'>
                Mood: {element.mood}
            </h5>
            <p id = "description">{element.description }</p>
            </VerticalTimelineElement>
        
          );
        })}
    </VerticalTimeline>
    <h1>November Stats</h1>
    <div2 className = "graph">
      <NovMood />
    </div2>
    <div2 className = "graph">
      <NovLoc />
    </div2>
    <h1>December:</h1>
    <VerticalTimeline>
      {
        decTimelineElements.map(element => {
          let isWorkIcon = element.icon === "friends"
          return(
            <VerticalTimelineElement
            key = {element.key}
            date = {element.date}
            dateClassName = "date"
            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
            icon = {isWorkIcon ? <FaUserFriends /> : <SchoolIcon />}
            >
            <h3 className='vertical-timeline-element-title'>
                {element.title}
            </h3>
            <img src = {element.image} alt = "BeReals!" width = "100%" height = "100%"></img>
            <h5 className='vertical-timeline-element-subtitle'>
                Location: {element.location}
            </h5>
            <h5 className='moods'>
                Mood: {element.mood}
            </h5>
            <p id = "description">{element.description }</p>
            </VerticalTimelineElement>
        
          );
        })}
    </VerticalTimeline>
    <h1>December Stats</h1>
    <div2 className = "graph">
      <DecMood />
    </div2>
    <div2 className = "graph">
      <DecLoc />
    </div2>
    <h1>Summary Statistics:</h1>
    <div2 className = "graph">
      <Graph />
    </div2>
    <h2> William Zhang Fall 2022.
    </h2>
  </div>
  );
}

export default App;

