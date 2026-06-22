
import { Link } from 'react-router-dom'
 
export default function NavMenu(){
    return (
        <nav>
            <div><Link to="/">Home Page</Link></div>
            <div><Link to="/about">About Page</Link></div>
            <div><Link to="/contact">Contact Page</Link></div>
        </nav>
    )
}