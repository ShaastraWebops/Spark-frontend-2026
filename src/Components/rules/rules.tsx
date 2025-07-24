import React from 'react';
import './rules.scss';
import { useScrollTriggerAnimation } from "../../useScrollTriggerAnimation";
import '../about/about.css'
const Rules: React.FC = () => {
    const elementRefs = useScrollTriggerAnimation();
  return (
    <> <div ref={(el) => el && !elementRefs.current.includes(el) && elementRefs.current.push(el)}>

      <h1 className="about-head">Rules and Regulations</h1>
      <div className='rule1'><p className="rules-para">
      Round 1 is a quiz to test the students' Aptitude, Logical and Mathematical Reasoning skills and is conducted in over 20 cities nationwide.
      </p></div>
      <div className='rule1'>
        <p className='rules-para'>
            <table>
            <tr><td><b>Topics:</b></td><td>Aptitude, Logical and Mathematical Reasoning</td></tr>
            <tr><td><b>Eligibility:</b></td><td>Students of Classes 7 to 10.</td></tr>
            <tr><td><b>Dress code:</b></td><td>None</td></tr>
            <tr><td><b>Student ID:</b></td><td>Not mandatory</td></tr>
            <tr><td><b>Registration fee:</b></td><td>None</td></tr>
        </table></p>
      </div>
      <div className='rule1'>
        <ul className='rules-para'>
            <li>Students can only carry a pen/pencil box and a water bottle. No rough sheets are allowed in the Quiz hall.</li>
            <br/>
            <li>The top 10 participants from each city would qualify for Spark Round 2 and stand a chance to compete with students from different cities and backgrounds.</li>
            <br/>
            <li>Certificates of Appreciation and Prizes will be awarded to the top 3 participants from each city.</li>
        </ul>
      </div>
    </div></>
  );
}

export default Rules;
