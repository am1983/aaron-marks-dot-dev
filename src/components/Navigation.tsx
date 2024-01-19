import { useState } from "react";
import { GiAbstract050, GiCalendar, GiCarrot, GiCementShoes } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";
import './styles/Navigation.css';

const Navigation = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => { 
    setNav(!nav); 
  }

  const toggleNavWithoutEvent = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    toggleNav();
  };

  return (
    <>
        <div className="mobile-navigation">
            <div id='mobileNav' className="nav-button">
                <a href="#" onClick={toggleNavWithoutEvent}>
                    <IoMenu className="icon" />
                </a>
            </div>
             <div id='mobileNavItems' 
                className={ 
                    nav 
                    ? 'overlay-section nav-overlay fixed active wipe-nav-enter' 
                    : 'overlay-section nav-overlay fixed inactive wipe-nav-exit'}>
                <div className="button-container">
                    <a href="#intro" className="overlay-button" onClick={toggleNav}>
                        <GiCementShoes className="mobile-icon" /><span>Introduction</span>
                    </a>
                    <a href="#summary" className="overlay-button" onClick={toggleNav}>
                        <GiAbstract050 className="mobile-icon" /><span>Summary</span>
                    </a>
                    <a href="#timeline" className="overlay-button" onClick={toggleNav}>
                        <GiCalendar className="mobile-icon" /><span>Timeline</span>
                    </a>
                    <a href="#" className="overlay-button" onClick={toggleNav}>
                        <GiCarrot className="mobile-icon" /><span>TBD</span>
                    </a>
                    <a href="#" className="overlay-button" onClick={toggleNav}>
                        <GiCarrot className="mobile-icon" /><span>TBD</span>
                    </a>
                </div>
                <h1>{nav}</h1>
            </div> 
        </div>
        <div className="desktop-nav">
            <a href="#intro">
                <GiCementShoes className="desktop-link" />
            </a>
            <a href="#summary">
                <GiAbstract050 className="desktop-link" />
            </a>
            <a href="#timeline">
                <GiCalendar className="desktop-link" />
            </a>
            <a href="#">
                <GiCarrot className="desktop-link" />
            </a>
            <a href="#">
                <GiCarrot className="desktop-link" />
            </a>
        </div>
    </>
  )
}

export default Navigation;