import React, {useRef} from 'react'
import Title from '../title/title'

function Contact() {

    const handleSubmit = () => {
        document.getElementById("create-form").reset()
    }

    return (
        <div className='flex flex-col mb-10 mx-auto px-2'>
            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/cc4de3d0-fbd8-433b-a25f-3ae140059964'
                    method='POST'
                    className='flex flex-col w-full md:w-7/12'
                    id="create-form"
                    >
                        <Title>Contact</Title>
                        <input
                            type='text'
                            name='name'
                            placeholder='Name'
                            className='p-2 bg-transparent border-2 rounded-md focus:outline-none'
                        />
                        <input 
                            type='text'
                            name='email'
                            placeholder='Email'
                            className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none'
                        />
                        <textarea 
                            name='message'
                            placeholder='Message'
                            rows='10'
                            className='p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none'
                        />
                        <button 
                            type='submit'
                            className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white'
                        >
                            Contact Me!
                        </button>
                </form>
            </div>
        </div>
    )
}

export default Contact