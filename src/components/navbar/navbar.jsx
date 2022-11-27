import { FaSun, FaMoon } from 'react-icons/fa'
import useDarkMode from '../../hooks/useDarkMode'
import React, { Suspense, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

const Home = React.lazy(() => import('../home/home'))
const About = React.lazy(() => import('../about/about'))
const TimeLine = React.lazy(() => import('../timeline/timeline'))
const Projects = React.lazy(() => import('../projects/projects'))

function NavBar() {
    const [isNavOpen, setIsNavOpen] = useState(false)

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
                                <Link className='py-4 px-2 text-gray-500 font-semibold hover:text-black dark:hover:text-white transition duration-300' to="/projects">Projects</Link>
                            </div>
                        </div>
                        <div className='hidden md:flex items-center space-x-3'>
                            <ThemeIcon className='top-navigation-icon' />
                        </div>
                        <div className="md:hidden flex items-center">
                            <button className="outline-none" onClick={() => setIsNavOpen((prev) => !prev)}>
                                <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                                    x-show="!showMenu"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={isNavOpen ? "sm:hidden" : "hidden"}>
                    <ul className="">
                        <li>
                            <Link className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300" to='/' onClick={() => setIsNavOpen((prev) => !prev)}>Home</Link>
                        </li>
                        <li>
                            <Link className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300" to='/about' onClick={() => setIsNavOpen((prev) => !prev)}>About</Link>
                        </li>
                        <li>
                            <Link className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300" to='/timeline' onClick={() => setIsNavOpen((prev) => !prev)}>Timeline</Link>
                        </li>
                        <li>
                            <Link className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300" to='/projects' onClick={() => setIsNavOpen((prev) => !prev)}>Projects</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        <Routes>
            <Route path="/" element={<Suspense fallback={<Loading />}><Home /></Suspense>} />
            <Route path="/about" element={<Suspense fallback={<Loading />}><About /></Suspense>} />
            <Route path="/timeline" element={<Suspense fallback={<Loading />}><TimeLine /></Suspense>} />
            <Route path="/projects" element={<Suspense fallback={<Loading />}><Projects /></Suspense>} />
        </Routes>
      </Router>
)}

const Loading = () => {
    return (
        <div className='"flex items-center justify-center flex-col text-center pt-20 pb-6"'>
            <h2 className="text-4xl md:text-7x1 dark:text-white mb-1 mb:mb-3 font-bold">Loading...</h2>
        </div>
    )
}

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