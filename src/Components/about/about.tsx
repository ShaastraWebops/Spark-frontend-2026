import React from 'react';
import './about.css';
import about from '../../assets/2.jpg';
import { useScrollTriggerAnimation } from "../../useScrollTriggerAnimation";

const About: React.FC = () => {
  const elementRefs = useScrollTriggerAnimation();

  return (
    <>
        <div ref={(el) => el && !elementRefs.current.includes(el) && elementRefs.current.push(el)}>

      <h3 className='about-head'>About Shaastra</h3>
      <div className='grid'>
        <div className='paras'>
          <p className='aboutus-para'>
            Shaastra is the annual technical festival of IIT Madras. Ever since its inception in the year 2000, Shaastra has been an integral part of the technical experience at IIT Madras. It has been growing in size, substance, and stature and has become a trendsetter among college technical festivals across the country. Shaastra has the distinction of being the first student-managed technical festival in the nation to be ISO 9001:2015 certified. Every edition of Shaastra features a wide variety of events encompassing the entire spectrum of innovation.
          </p>
        </div>
        <div>
          <img src={about} alt='abt' className='abt-img'/>
        </div>
      </div>
      <div className='p-down'>
        <p className='aboutus-para'>
          To ensure a steep learning curve, numerous workshops, lectures, and video conferences dealing with diverse spheres of science, technology, and finance are also organized. Shaastra believes strongly in knowledge sharing and encouraging technical spirit among the students of the country. Spark is an innovative initiative that adheres to Shaastra's non-profit roots as we provide a national platform for students to compete and improve themselves at zero registration fee. With Spark, Shaastra aims to ignite the 'Spark' of Innovation & Technology in the tech-savvy scientific young student minds of the country.
        </p>
      </div></div>
    </>
  );
}

export default About;
