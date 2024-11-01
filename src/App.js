import React from 'react'

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/Home'

import './styles/global.scss';

const App = () => (
    <>
        <NavBar />
        <HomePage />
        <Footer />
    </>
)

export default App;