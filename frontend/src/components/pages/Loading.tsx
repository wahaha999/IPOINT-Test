import React from 'react';
import logo from '../../assets/images/logo.svg'

const Loading: React.FC = () => {
    return (
        <div className='splash-screen'>
            <img src={logo} className="app-logo" alt="logo" />
            <span>Loading ...</span>
        </div>
    );
};

export default Loading;