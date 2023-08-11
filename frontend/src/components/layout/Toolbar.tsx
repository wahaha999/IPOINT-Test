import React from 'react';
import brand from '../../assets/images/brand.png';
import logo from '../../assets/images/logo.svg';

const Toolbar: React.FC = () => {
    return (
        <div className='toolbar'>
            <img className='brand' src={brand} alt='brand' />
            <div>
                <a>Find a home</a>
                <a>Sell a home</a>
                <a>Join c21</a>
                <a>Blog</a>
                <a>Contact</a>
            </div>
            <img className='logo' src={logo} alt='logo' />
        </div>
    );
};

export default Toolbar;