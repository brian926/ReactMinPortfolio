import React from "react";

function Home() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h2 className="text-4xl md:text-7x1 dark:text-white mb-1 mb:mb-3 font-bold">Brian Antunes</h2>
            <div className="container px-5 py-2 mx-auto lg:px-32">
                <div class="w-auto p-1 md:p-2">
                    <img className="block object-cover mx-auto w-1/4 h-1/5 rounded-lg border-2 border-stone-900 dark:border-white" src='/assets/headshot2.3.jpg'/>
                </div>
            </div>
            <p className="text-base md:text-x1 mb-3 font-medium">Software & System Engineer</p>
            <p className="text-sm max-w-xl mb-6 font-bold px-2">
                Hello! My name is Brian and I am a Software and Systems Engineer based in Connecticut. I have a wide range of technical skills, including proficiency in Frontend and Backend development, as well as expertise in various programming languages such as PowerShell, SQL, HTML, CSS, JavaScript, Node.js, MongoDB, Go, and Python.
            </p>
            <p className="text-sm max-w-xl mb-6 font-bold px-2">
                In addition to my technical skills, I am also a certified IT professional with multiple industry certifications, including Azure System Admin, AWS Fundamentals, Red Hat System Admin, and CCNA.
            </p>
            <p className="text-sm max-w-xl mb-6 font-bold px-2">
                As an engineer, my goal is to bring innovative projects to life and create world-class solutions. I am highly passionate about technology and always strive to push the boundaries of what is possible. I believe that my expertise and dedication to developing effective solutions make me a valuable asset in any team or project.
            </p>
        </div>
    )
}

export default Home