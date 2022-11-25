import React from 'react'
import projects from '../../data/projects'
import PortfolioItem from '../portfolioitem/portfolioitem'

function Projects() {
    return(
        <div className='flex flex-col md:flex-row items-center justify-center pt-20 pb-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {projects.map((project, index) => (
                    <PortfolioItem imgUrl={project.imgUrl} title={project.title} stack={project.stack} link={project.link} description={project.description} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Projects