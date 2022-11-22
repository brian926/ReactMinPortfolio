import { FaSun,FaMoon } from 'react-icons/fa'
import useDarkMode from '../../hooks/useDarkMode'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from '../home/home'

function NavBar() {
    return (
        <Router>
            <nav className='flex items-center justify-between flex-wrap p-6'>
                <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
                    <div className='text-sm lg:flex-grow'>
                        <Link className='block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4' to="/">Home</Link>
                    </div>
                    <div className='text-sm lg:flex-grow'>
                        <Link className='block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4' to="/about">About</Link>
                    </div>
                    <div>
                        <ThemeIcon className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border white hover:border-transparent hover:bg-white mt-4 lg:mt-0' />
                    </div>
                </div>
            </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
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
function About() {
  return <h2>About</h2>
}
export default NavBar