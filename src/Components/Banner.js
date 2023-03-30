import data from "../Data/data.json"

function Banner(){
    const newName = data.personal.name.split(" ")
    return(
        <div className="rt_banner h-64">
            <h2 className="text-center text-7xl py-9 font-bold">{newName[0].slice(0,1)}<span className="text-white">{newName[1].slice(0,1).toLowerCase()}.</span></h2>
            <img src="/html.png" className="absolute img1" width={50}/>
            <img src="/css.png" className="absolute img2" width={50}/>
            <img src="/js.png" className="absolute img3" width={50}/>
            <img src="/react.png" className="absolute img4" width={50}/>
            <img src="/wordpress.png" className="absolute img5" width={50}/>
            <img src="/php.png" className="absolute img6" width={50}/>
        </div>
    )
}

export default Banner