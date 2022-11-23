import { FaSun,FaMoon } from 'react-icons/fa'
import useDarkMode from '../../hooks/useDarkMode'
import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

const Home = React.lazy(() => import('../home/home'))
const About = React.lazy(() => import('../about/about'))
const TimeLine = React.lazy(() => import('../timeline/timeline'))

function NavBar() {
    return (
        <Router>
            <nav className='shadow-lg'>
                <div className='max-w-6xl mx-auto px-4'>
                    <div className='flex justify-between'>
                        <div className='flex space-x-7'>
                            <div className='hidden md:flex items-center space-x-1'>
                                <Link className='py-4 px-2 text-gray-500 font-semibold hover:text-black dark:hover:text-white transition duration-300' to="/">Home</Link>
                                <Link className='py-4 px-2 text-gray-500 font-semibold hover:text-black dark:hover:text-white transition duration-300' to="/about">About</Link>
                                <Link className='py-4 px-2 text-gray-500 font-semibold hover:text-black dark:hover:text-white transition duration-300' to="/timeline">Timeline</Link>
                            </div>
                        </div>
                        <div className='hidden md:flex items-center space-x-3'>
                            <ThemeIcon className='py-2 px-2 font-medium  rounded  transition duration-300' />
                        </div>
                    </div>
                </div>
            </nav>
        <Routes>
            <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
            <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}><About /></Suspense>} />
            <Route path="/timeline" element={<Suspense fallback={<div>Loading...</div>}><TimeLine /></Suspense>} />
        </Routes>
      </Router>
)}

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode()
  const handleMode = () => setDarkTheme(!darkTheme)
  return (
    <span onClick={handleMode}>
      {darkTheme ? (<FaSun size='24' className='top-navigation-icon' />) : (<FaMoon size='24' className='top-navigation-icon' />)}
    </span>
  )
}

export default NavBar