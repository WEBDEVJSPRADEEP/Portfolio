import React, { useState } from "react";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Profile from "./Components/Profile";
import Footer from "./Components/Footer";
import Resume from "./Components/Resume";
import Services from "./Components/Services";
import Contact from "./Components/Contact";

function Main() {
   const [tab,setTab] = useState("about")

   const tabClick =(item)=>{
        setTab(item)
   }
  return (
    <>
        <Banner/>
        <Profile/>
        <div className="rt_menu_box">
            <div className="container mx-auto">
                <ul className="flex justify-center py-10 gap-x-10">
                    <li className={`font-bold cursor-pointer transition-all duration-75 ${tab === "about" ? 'active' : null}`} onClick={()=>tabClick("about")}>About Me</li>
                    <li className={`font-bold cursor-pointer transition-all duration-75 ${tab === "resume" ? 'active' : null}`} onClick={()=>tabClick("resume")}>Resume</li>
                    <li className={`font-bold cursor-pointer transition-all duration-75 ${tab === "services" ? 'active' : null}`} onClick={()=>tabClick("services")}>Services</li>
                    {/* <li className={`font-bold cursor-pointer transition-all duration-75 ${tab === "blogs" ? 'active' : null}`} onClick={()=>tabClick("blogs")}>Blogs</li> */}
                    <li className={`font-bold cursor-pointer transition-all duration-75 ${tab === "contact" ? 'active' : null}`} onClick={()=>tabClick("contact")}>Contact</li>
                </ul>
            </div>
        </div>
        
        {tab === "about" ? <About/> : null}
        {tab === "resume" ? <Resume/> : null}
        {tab === "services" ? <Services/> : null}
        {tab === "blogs" ? "blogs" : null}
        {tab === "contact" ? <Contact/> : null}
        <Footer />
    </>
  );
}

export default Main;