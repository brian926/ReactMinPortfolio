import React from "react";
import { render } from "react-dom";

function Home() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h2 className="text-4xl md:text-7x1 dark:text-white mb-1 mb:mb-3 font-bold">Brian Antunes</h2>
            <p className="text-base md:text-x1 mb-3 font-medium">Software & System Engineer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quo repudiandae facere repellat aspernatur consequuntur, quis architecto recusandae aliquam obcaecati. 
            Itaque consequuntur dolorem nesciunt odio ad, mollitia iste asperiores quae repudiandae.</p>
        </div>
    )
}

export default Home