import React from 'react'
import timeline from '../../data/timeline'
import TimeLineItem from '../timeLineItem/timeLineItem'
import Title from '../title/title'

function Timeline() {
    return (
        <div className='flex items-center justify-center flex-col md:flex-row my-20'>
            <div className='w-full md:w-7/12 px-10'>
                <Title>Timeline</Title>
                {timeline.map((item, index)=> (
                    <TimeLineItem
                        year={item.year}
                        title={item.title}
                        duration={item.duration}
                        details={item.details}
                        key={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default Timeline