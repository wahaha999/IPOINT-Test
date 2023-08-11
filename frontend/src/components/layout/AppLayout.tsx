import React from 'react';
import Header from './Header';
import Toolbar from './Toolbar';

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className='container'>
            <Header />
            <Toolbar />
            {children}
        </div>
    )
};

export default AppLayout;