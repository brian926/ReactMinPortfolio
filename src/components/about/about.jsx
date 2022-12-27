import React from "react";

function About() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 px-2 pb-6">
            <h2 className="text-4xl md:text-7x1 dark:text-white mb-1 mb:mb-3 font-bold">About Me and This Site</h2>
            <p className="text-base md:text-x1 mb-3 font-medium">A little about this site!</p>
            <p className="text-sm max-w-xl mb-6 font-bold">I am a highly motivated Engineer with a passion for continuous learning and personal development. This website was a fantastic opportunity for me to challenge myself and deepen my knowledge of Vite, React, and Tailwind. The site was built using these technologies, specifically Vite and React for the functionality and Tailwind for styling.
            </p>
            <p className="text-sm max-w-xl mb-6 font-bold">
            If you have any questions or are interested in discussing potential opportunities, please don't hesitate to reach out through the contact form below. I am always open to connecting with other professionals and exploring new opportunities.
            </p>
        </div>
    )
}

export default About