import React from 'react'
import {Link} from 'react-router-dom'

function Navigation(){
    return(
        <nav>
            <Link to="/"><h1>USER MANAGEMENT SYSTEM</h1></Link>
            <ul>
                <Link to="/reg"><li>Registration</li></Link>
                <Link to="/login"><li>Login</li></Link>
            </ul>
        </nav>
    );
}

export default Navigation;