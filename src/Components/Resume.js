import React from "react";
import data from "../Data/data.json"

function Resume(){
    return(
        <>
            <div className="rt_resume py-16">
                <div className="container mx-auto">
                    <h3 className="font-bold text-2xl">Resume</h3>
                    <h1 className="font-bold text-5xl mb-10 leading-tight">Combination of Skills & Experience</h1>
                    <div className="flex row">
                        <div className="w-6/12 px-4">
                        <h1 className="font-bold text-2xl mb-6 pb-5">Professional Skills</h1>
                            <div className="rt_skills">
                                <ul className="flex flex-wrap mb-7">
                                    {data.skills.map((item,index)=>{
                                        return <li key={index} className="w-6/12 pr-4 pl-6 font-bold relative mb-5">{item}</li>
                                    })}
                                </ul>
                            </div>
                            <h1 className="font-bold text-2xl mb-6 pb-5">Education</h1>
                            {data.education.map((item,index)=>{
                                return(
                                    <div className="rt_education mb-7" key={index}>
                                        <div className="flex items-center mb-2 justify-between">
                                            <div className="block">
                                                <h2 className="font-bold text-lg">{item.name}</h2>
                                                <p>{item.university}</p>
                                            </div>
                                            <span>{item.year}</span>
                                        </div>
                                        <p>{item.description}</p>
                                    </div>
                                )
                            })}
                            
                        </div>
                        <div className="w-6/12 px-4">
                            <h1 className="font-bold text-2xl mb-6 pb-5">Software Skills</h1>
                            <div className="rt_skills">
                                <ul className="flex flex-wrap mb-7">
                                    {data.software.map((item,index)=>{
                                        return <li key={index} className="w-6/12 pr-4 pl-6 font-bold relative mb-5">{item}</li>
                                    })}
                                </ul>
                            </div>
                            <h1 className="font-bold text-2xl mb-5 pb-5">Work Experience</h1>
                            {data.experience.map((item,index)=>{
                                return(
                                    <div className="rt_education mb-7" key={index}>
                                        <div className="flex items-center mb-2 justify-between">
                                            <div className="block">
                                                <h2 className="font-bold text-lg">{item.name}</h2>
                                                <p>{item.company}</p>
                                            </div>
                                            <span>{item.year}</span>
                                        </div>
                                        <p>{item.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Resume