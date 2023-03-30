import data from "../Data/data.json"
function Services(){
    return(
        <>
            <div className="rt_services container mx-auto pt-10 pb-2">
                <h3 className="font-bold text-2xl">Services</h3>
                <h1 className="font-bold text-5xl mb-10 leading-tight">What I Do</h1>
                <div className="flex row flex-wrap">
                    {data.services.map((item,index)=>{
                        return(
                            <div className="w-2/6 px-4 mb-8 text-center" key={index}>
                                <div className="bg-white p-10 rounded-xl">
                                    <h2 className="font-bold mb-4">{item.name}</h2>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Services;