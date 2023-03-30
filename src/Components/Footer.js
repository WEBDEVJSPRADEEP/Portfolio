import data from "../Data/data.json"

function Footer(){
    const newName = data.personal.name.split(" ")
    return(
        <div className="rt_Footer pt-10 pb-10 text-center container mx-auto">
            <h2 className="text-7xl font-bold">{newName[0].slice(0,1)}<span>{newName[1].slice(0,1).toLowerCase()}.</span></h2>
            <p>&copy; 2023 All rights reserved.</p>
        </div>
    )
}

export default Footer