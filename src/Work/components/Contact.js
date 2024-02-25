
const About = () => {
    return (
        <>
            <div className='body mx-[12%] my-0 p-[1%] bg-offWhite rounded-xl relative h-full flex flex-col backdrop-blur-[5px] top-28 justify-center'>
                <div className="w-1/2 ml-[25%] items-center flex flex-col">
                    <h1>Contact Us</h1>
                    <form className="flex flex-col w-full">
                        <input className="m-3 p-3 rounded-lg" id="name" type="text" placeholder="Name" />
                        <input className="m-3 p-3 rounded-lg" id="subject" type="text" placeholder="Subject" />
                        <textarea className="m-3 p-3 rounded-lg" name="" id="message" cols="30" rows="10" placeholder="Message" />
                        <button className="m-3 p-3 rounded-lg bg-gray-600 hover:bg-gray-900 text-offWhite transition-all duration-[0.4s] text-lg" type="submit">{'Submit'}</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default About;