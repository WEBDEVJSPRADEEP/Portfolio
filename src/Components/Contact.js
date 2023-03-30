import data from "../Data/data.json"
function Contact(){
    return(
        <>
            <div className="rt_contact container mx-auto pt-10 pb-10">
                <h3 className="font-bold text-2xl">Contact</h3>
                <h1 className="font-bold text-5xl mb-12 leading-tight">Contact me to get your work done</h1>
                <div className="flex row flex-wrap items-center">
                    <div className="w-6/12 px-4 flex justify-center">
                        <img src="./contact.png" width={450}/>
                    </div>
                    <div className="w-6/12 px-4">
                        <h2 className="font-bold text-3xl mb-5">{data.contact.heading}</h2>
                        <p>{data.contact.description}</p>
                        <a href={`mailto:${data.contact.email}`} className="rt_btn mt-5">Contact Me</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;