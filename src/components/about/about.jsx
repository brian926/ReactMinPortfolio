import React from "react";

function About() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 px-2 pb-6">
            <h2 className="text-4xl md:text-7x1 dark:text-white mb-1 mb:mb-3 font-bold">About Me and This Site</h2>
            <p className="text-base md:text-x1 mb-3 font-medium">A little about this site!</p>
            <p className="text-sm max-w-xl mb-6 font-bold">As an Engineer, I am always looking to challenge myself. 
                This site was a great way to do just that and an opportunity to learn more about Vite, React, and Tailwind. 
                The site uses Vite and React and Tailwind for style.
            </p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                If you would like to contact me any questions or opportunities please feel free to do so below in the Contact form!
            </p>
        </div>
    )
}

export default About