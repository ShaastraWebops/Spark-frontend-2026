import React from 'react';
import './structure.css';
import i1 from '../../assets/1.jpg';
import i2 from '../../assets/2.jpg';
import i3 from '../../assets/3.jpg';
import { useScrollTriggerAnimation } from "../../useScrollTriggerAnimation";

const Structure: React.FC = () => {
    const elementRefs = useScrollTriggerAnimation();

    return (
        <><div ref={(el) => el && !elementRefs.current.includes(el) && elementRefs.current.push(el)}>
            <h3 className='about-head'>Structure</h3>
            <p className='structure-para'>
                SPARK is a three-tier mega event, with the first phase being the SPARK
                Junior Quiz, a pan-India quiz competition to be conducted in over 20
                cities, far and wide across the nation. With 4000+ participants, the
                SPARK Junior Quiz is indeed one epic quizzing journey. The winners stand
                a chance to travel all the way to IIT Madras free of cost to compete in
                the national finals and experience what Shaastra has to offer.
            </p></div>
            <div className='structure-grid' ref={(el) => el && !elementRefs.current.includes(el) && elementRefs.current.push(el)}>
                <div className='structure-img'><img src={i1} alt='r1' /></div>
                <div className='rh1'>
                    <h2 className='l1'>Round 1</h2>
                    <h4>Shaastra Spark Quiz</h4>
                    <ul className='r1'>
                        <li>·It is a quiz to test the student's Aptitude, Logical and Mathematical Reasoning skills and happens in over 20+ cities nationwide.</li>
                        <br/>
                        <li>·The top 10 participants from each city would qualify for Spark Round 2 and stand a chance to compete with students from different cities and backgrounds.</li>
                    </ul>
                    <button>Attempt Mock Quiz</button>
                </div>
            </div>

            <div className='structure-grid sg2' ref={(el) => el && !elementRefs.current.includes(el) && elementRefs.current.push(el)}>
                <div className='rh1'>
                    <h2 className='l2'>Round 2</h2>
                    <h4>Online Case Study Competition</h4>
                    <ul className='r1'>
                        <li>·A problem statement will be provided to qualified participants for Round 2.</li>
                        <br />
                        <li>·Teams must come up with an innovative solution for the same.</li>
                        <br />
                        <li><strong>·Note:</strong> This is only for students who qualified in the first round.</li>
                    </ul>
                </div>
                <div className='structure-img'><img src={i2} alt='r2' /></div>
            </div>

            <div className='structure-grid' ref={(el) => el && !elementRefs.current.includes(el) && elementRefs.current.push(el)}>
                <div className='structure-img'><img src={i3} alt='r3' /></div>
                <div className='rh1'>
                    <h2 className='l3'>Round 3</h2>
                    <h4>Shaastra Spark Junior Championship (SJC)</h4>
                    <ul className='r1'>
                        <li>·Selected teams from Round 2 will be invited to IIT Madras on a sponsored two-day trip.</li>
                        <br />
                        <li>·Finalists will participate in competitions and will get a chance to interact with IIT Madras Professors and students to ensure a holistic learning experience.</li>
                        <br />
                        <li>·Further details regarding the competition will be provided later to the selected teams.</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Structure;
