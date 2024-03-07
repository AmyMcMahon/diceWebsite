import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer  style={{ backgroundColor: '#E8DFF2', padding: '10px'}}>
            <a href="/contact" style={{color:"#321856"}}>Feedback</a>
            <a href="/feedback" style={{color:"#321856", paddingLeft:"2%"}}>Chat</a>
        </footer>
    );
};

export default Footer;
