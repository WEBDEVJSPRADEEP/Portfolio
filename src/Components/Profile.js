import data from "../Data/data.json"

function Profile(){
    return(
        <div className="rt_profile_box">
            <div className="container mx-auto bg-white p-8 rounded-xl relative">
                <div className="block flex-wrap items-center lg:flex">
                    <div className="flex items-center w-full lg:border-r mb-5 lg:mb-0 border-slate-300 border-solid lg:w-6/12">
                        <img src={data.personal.image} className="rounded-xl mr-7"/>
                        <div className="rt_profile_info">
                            <h5 className="text-xl text-black font-bold mb-1.5">I'm</h5>
                            <h2 className="font-bold text-4xl mb-1.5">{data.personal.name}</h2>
                            <p className="text-xl text-black">{data.personal.tagline}</p>
                            <ul className="flex mt-8 gap-2.5">
                                {Object.keys(data.social).map((item,index)=>{
                                    return(item && item !== "" ? <li key={index}><a href={data.social[item]} target="_blank" className="hover:scale-125 block transition-all duration-75"><img src={`/${item}.png`} width="30"/></a></li>:null)
                                })}
                            </ul>
                        </div>  
                    </div>  
                    <div className="rt_prifle_right flex flex-wrap lg:px-12 gap-y-4 lg:gap-y-8 w-full lg:w-6/12">
                        <div className="w-6/12">
                            <p className="mb-1">Birthday</p>
                            <h4 className="font-bold text-lg">{data.personal.birthday}</h4>
                        </div>
                        <div className="w-6/12">
                            <p className="mb-1">Email</p>
                            <h4 className="font-bold text-lg">{data.personal.email}</h4>
                        </div>
                        <div className="w-6/12">
                            <p className="mb-1">Phone</p>
                            <h4 className="font-bold text-lg">{data.personal.phone}</h4>
                        </div>
                        <div className="w-6/12">
                            <p className="mb-1">Location</p>
                            <h4 className="font-bold text-lg">{data.personal.location}</h4>
                        </div>
                    </div>
                </div>  
            </div>  
        </div>  
    )
}

export default Profile