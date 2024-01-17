import { useState } from "react";
import { GiAbstract050, GiBalloonDog, GiCalendar, GiCarrot, GiCementShoes } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";
import './styles/Navigation.css';

const Navigation = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => { 
    console.log('clicked');
    console.log(nav);
    setNav(!nav); 
  }

  return (
    <>
        <div className="mobile-navigation">
            <div id='mobileNav' className="nav-button">
                <a href="#" onClick={toggleNav}>
                    <IoMenu className="icon" />
                </a>
            </div>
             <div id='mobileNavItems' 
                className={ 
                    nav 
                    ? 'overlay-section nav-overlay fixed active' 
                    : 'overlay-section nav-overlay fixed'}>
                OVER LAY!
                <h1>{nav}</h1>
            </div> 
        </div>
        <div className="desktop-nav">
            <a href="#">
                <GiCementShoes className="desktop-link" />
            </a>
            <a href="#">
                <GiAbstract050 className="desktop-link" />
            </a>
            <a href="#">
                <GiAbstract050 className="desktop-link" />
            </a>
            <a href="#">
                <GiCalendar className="desktop-link" />
            </a>
            <a href="#">
                <GiCarrot className="desktop-link" />
            </a>
        </div>
    </>
  )
}

export default Navigation;