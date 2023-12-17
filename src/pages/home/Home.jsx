import React from 'react';
import "./Home.css";

import { Link } from 'react-router-dom';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            Home Page
            <div>
                All Resumes
            </div>
            <Footer />
        </div>
    )
}

export default Home