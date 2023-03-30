import React from "react";
import data from "../Data/data.json"

function About(){
    return(
        <>
            <div className="rt_about py-16">
                <div className="container mx-auto flex items-center flex-wrap">
                    <div className="w-full lg:w-6/12 order-2 lg:order-1 mt-10 lg:mt-0">
                        <h3 className="font-bold text-2xl mb-3">About Me</h3>
                        <h1 className="font-bold text-5xl mb-4 leading-tight">{data.personal.tagline2}</h1>
                        <p>{data.personal.description}</p>
                        <a href={data.personal.cv} target="_blank" className="rt_btn mt-10">Download CV</a>
                    </div>
                    <div className="w-full lg:w-6/12 flex justify-center order-1 lg:order-2">
                        <div className="relative rt_about_img">
                            <span className="absolute top-5 left-5 right-5 bottom-5 rounded-2xl"></span>
                            <img src="/about.jpg" className="rounded-2xl"/>
                            {/* <div className="rt_img_circle absolute">
                                <img src="/html.png" width={50} className="absolute img1"/>
                                <img src="/css.png" className="absolute img2" width={50}/>
                                <img src="/js.png" className="absolute img3" width={50}/>
                                <img src="/react.png" className="absolute img4" width={50}/>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About
