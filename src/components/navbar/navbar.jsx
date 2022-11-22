import { FaSun,FaMoon } from 'react-icons/fa'
import useDarkMode from '../../hooks/useDarkMode'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from '../home/home'

function NavBar() {
    return (
        <Router>
        <div>
            <nav>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/About">About</Link>
                </li>
                <li>
                <ThemeIcon />
                </li>
            </ul>
            </nav>
        </div>
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