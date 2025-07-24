import React, { useState, useEffect } from 'react';
import './navbar.scss'
import shaastraLogo from '../../assets/logos/ShaastraLogoWhite.png'
import IITMLogo from '../../assets/logos/IITM_Logo_White.png'
import home from '../../assets/icons/home.svg'
import about from '../../assets/icons/about.svg'
import rules from '../../assets/icons/rule.svg'
// import schedule from '../../assets/icons/schedule.svg'
import structure from '../../assets/icons/structure.svg'
import contact from '../../assets/icons/contact.svg'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { Divide as Hamburger } from 'hamburger-react'
import FullScreenOverlay from '../fullScreenOverlay/fullScreenOverlay';

type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {

    const { device } = useSelector((state: RootState) => state.windowSize)

    const [activePage, setActivePage] = useState<string>("Home")
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleScroll = () => {
        // Logic to determine the active page based on scroll position
        // For example, you can compare the scroll position with the positions of different elements on the page and update the active page accordingly
        // You can use methods like getBoundingClientRect() to get the position of elements
    
        // Example logic: If element with ID 'section1' is in view, set activePage to 'section1'
        // const home = document.getElementById('home');
        // if (home) {
        //   const rect = home.getBoundingClientRect();
        //   if (rect.top >= 0 || rect.bottom <= window.innerHeight) {
        //     setActivePage('Home');
        //   }
        // }

        const home = document.getElementById('home');
        const about = document.getElementById('about');
        const rules = document.getElementById('rules');
        const structure = document.getElementById('structure');
        const footer = document.getElementById('footer');
        if (home) {
          const rect = home.getBoundingClientRect();
          if (rect.top <= 100) {
            console.log("home")
            setActivePage('Home');
          }
        }
        if(about){
            const rect = about.getBoundingClientRect();
          if (rect.top <= 100) {
            console.log("about")
            setActivePage('About');
          }
        }
        if(rules){
            const rect = rules.getBoundingClientRect();
          if (rect.top <= 100) {
            console.log("rules")
            setActivePage('Rules');
          }
        }
        if(structure){
            const rect = structure.getBoundingClientRect();
          if (rect.top <= 0) {
            console.log("structure")
            setActivePage('Structure');
          }
        }
        if(footer){
            const rect = footer.getBoundingClientRect();
          if (rect.bottom <= window.innerHeight) {
            console.log("footer")
            setActivePage('Contact');
          }
        }

        // const rules = document.getElementById('rules');
        // if (rules) {
        //   const rect = rules.getBoundingClientRect();
        //   if (rect.top >= 0 || rect.bottom <= window.innerHeight) {
        //     setActivePage('Rules');
        //   }
        // }
      };
    
      useEffect(() => {
        // Attach scroll event listener when component mounts
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener when component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    return (
        <div className={`navbar ${device}`}>
            <div className='logos'>
                <img className={`shaastra-logo ${device}`} src={shaastraLogo} alt=''/>
                <img className={`IITMLogo ${device}`} src={IITMLogo} alt=''/>
            </div>

            {device === "mobile" ? 
                <div>
                <div className='menu'><Hamburger toggle={setIsOpen} toggled={isOpen} /></div>
                {isOpen ? 
                    <FullScreenOverlay>
                        <div className='element-wrapper'>
                            <img alt='' src={home} className={`icon ${activePage === "Home" ? "active" : ""}`}/>
                            <div onClick={()=>{
                                setActivePage("Home")
                                document.getElementById('home')?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                                setIsOpen(false)
                            }} className={`navbar-element ${device} ${activePage === "Home" ? "active" : ""}`}>Home</div>
                        </div>

                        <div className='element-wrapper'>
                            <img alt='' src={about} className={`icon ${activePage === "About" ? "active" : ""}`}/>
                            <div onClick={()=>{
                                setActivePage("About")
                                document.getElementById('about')?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                                setIsOpen(false)
                            }} className={`navbar-element ${device} ${activePage === "About" ? "active" : ""}`}>About</div>
                        </div>

                        <div className='element-wrapper'>
                            <img alt='' src={rules} className={`icon ${activePage === "Rules" ? "active" : ""}`}/>
                            <div onClick={()=>{
                                setActivePage("Rules")
                                document.getElementById('rules')?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                                setIsOpen(false)
                            }} className={`navbar-element ${device} ${activePage === "Rules" ? "active" : ""}`}>Rules</div>
                        </div>

                        <div className='element-wrapper'>
                            <img alt='' src={structure} className={`icon ${activePage === "Structure" ? "active" : ""}`}/>
                            <div onClick={()=>{
                                setActivePage("Structure")
                                document.getElementById('structure')?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                                setIsOpen(false)
                            }} className={`navbar-element ${device} ${activePage === "Structure" ? "active" : ""}`}>Structure</div>
                        </div>

                        <div className='element-wrapper'>
                            <img alt='' src={contact} className={`icon ${activePage === "Contact" ? "active" : ""}`}/>
                            <div onClick={()=>{
                                setActivePage("Contact")
                                document.getElementById('footer')?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                                setIsOpen(false)
                            }} className={`navbar-element ${device} ${activePage === "Contact" ? "active" : ""}`}>Contact</div>
                        </div>
                    </FullScreenOverlay>
                : null}
            </div>
                :
                <div className='nav-icons'>
                <div 
                    className={`nav-item ${activePage==="Home"? "active":""}`} 
                    onClick={()=>{
                        setActivePage("Home")
                        document.getElementById('home')?.scrollIntoView({
                            behavior: 'smooth'
                        });
                        }
                    }
                >
                    <img className='nav-img' alt='' src={home}/>
                    <div className='nav-label'>Home</div>
                </div>

                <div 
                    className={`nav-item ${activePage==="About"? "active":""}`} 
                    onClick={()=>{
                        setActivePage("About")
                        document.getElementById('about')?.scrollIntoView({
                            behavior: 'smooth'
                        });
                        }
                    }
                >
                    <img className='nav-img' alt='' src={about}/>
                    <div className='nav-label'>About</div>
                </div>

                <div 
                    className={`nav-item ${activePage==="Rules"? "active":""}`}
                    onClick={()=>{
                        setActivePage("Rules")
                        document.getElementById('rules')?.scrollIntoView({
                            behavior: 'smooth'
                        });
                        }
                    }
                >
                    <img className='nav-img' alt='' src={rules}/>
                    <div className='nav-label'>Rules</div>
                </div>

                <div 
                    className={`nav-item ${activePage==="Structure"? "active":""}`} 
                    onClick={()=>{
                        setActivePage("Structure")
                        document.getElementById('structure')?.scrollIntoView({
                            behavior: 'smooth'
                        });
                        }
                    }
                >
                    <img className='nav-img' alt='' src={structure}/>
                    <div className='nav-label'>Structure</div>
                </div>

                {/* <div 
                    className={`nav-item ${activePage==="Schedule"? "active":""}`} 
                    onClick={()=>{
                        setActivePage("Schedule")
                        document.getElementById('schedule')?.scrollIntoView({
                            behavior: 'smooth'
                        });
                        }
                    }
                >
                    <img className='nav-img' alt='' src={schedule}/>
                    <div className='nav-label'>Schedule</div>
                </div> */}

                <div 
                    className={`nav-item ${activePage==="Contact"? "active":""}`}
                    onClick={()=>{
                        setActivePage("Contact")
                        document.getElementById('footer')?.scrollIntoView({
                            behavior: 'smooth'
                        });
                        }
                    }
                >
                    <img className='nav-img' alt='' src={contact}/>
                    <div className='nav-label'>Contact</div>
                </div>

            </div>
            } 
        </div>
    )
}

export default Navbar;