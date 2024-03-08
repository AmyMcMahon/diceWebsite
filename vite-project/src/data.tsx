import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const Data: React.FC = () => {
    return (
        <>
            <NavBar/>
            <div>
                <h1>Hello, World!</h1>
                {/* Add your components and content here */}
            </div>
            <Footer />
        </>
    );
};

export default Data;