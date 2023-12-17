import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return (
        <div>
            <Link to='/resume/create' className='link' >
                Create
            </Link>

        </div>
    )
}

export default Navbar