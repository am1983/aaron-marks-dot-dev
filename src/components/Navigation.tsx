import { useState } from "react";
import { GiBalloonDog } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";

const Navigation = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => { 
    console.log('clicked');
    console.log(nav);
    setNav(!nav); 
  }

  return (
    <>
        <div className="hidden-md hidden-lg hidden-xl">
            <div id='mobileNav' className="nav-button">
                <a href="#" onClick={toggleNav}>
                    <IoMenu className="icon" />
                </a>
            </div>
            {   nav 
                ? <div id='mobileNavItems' className="overlay-section nav-overlay fixed" hidden={nav}>
                    OVER LAY! 
                    <h1>{nav}</h1>
                </div> 
                : 
                ''
            }
        </div>
        <div className="desktop-nav hidden-sm">
            <a href="#">
                <GiBalloonDog className="desktop-link" />
            </a>
            <a href="#">
                <GiBalloonDog className="desktop-link" />
            </a>
            <a href="#">
                <GiBalloonDog className="desktop-link" />
            </a>
            <a href="#">
                <GiBalloonDog className="desktop-link" />
            </a>
            <a href="#">
                <GiBalloonDog className="desktop-link" />
            </a>
        </div>
    </>
  )
}

export default Navigation;