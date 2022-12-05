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
                Hi, I'm Brian!
                I am a Software and System Engineer based in New Haven, Connecticut. I am proficient in both Frontend development and Backend development and I have extensive knowledge in PowerShell, SQL, HTML, CSS, Javascript, Node.Js, MongoDB, Go, and Python.
            </p>
            <p className="text-sm max-w-xl mb-6 font-bold px-2">
                I am also a certified IT professional with numerous certifications including Azure System Admin, AWS Fundamentals, Red Hat System Admin, and CCNA.
                As a engineer, I aspire to help bring creative projects to life and demonstrate my commitment to developing world-class solutions.
                With a passion of Technology, I hope to continue to challenge the scope and create more effective solutions!
            </p>
        </div>
    )
}

export default Home