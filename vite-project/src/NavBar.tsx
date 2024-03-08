import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
    return (
        <nav style={{ background: "#E8DFF2", padding: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <Link to="/">
                    <img src="./dice.png" alt="Logo" style={{ width:"100%", height:"100%"}} />
                </Link>
                <h2 style={{ margin: "0", paddingLeft:"5px"}}><strong>D'ISE</strong></h2>
                <ul style={{ padding: "0", margin: "0", listStyle: "none", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                <li><a href="/" className="contrast">Home</a></li>
                        <li><a href="/innovation" className="contrast">Innovation</a></li>
                        <li><a href="/beyond" className="contrast">Beyond Code</a></li>
                        <li><a href="/data" className="contrast">Data</a></li>
                        <li><a href="/salim" className='contrast'>Salim</a></li>
                </ul>
            </div>
            <div>
                <ul style={{ padding: "0", margin: "0"}}>
                    <li>
                        <button className="outline secondary" style={{ padding: "8px 16px", backgroundColor: "transparent", border: "1px solid #4D2585", borderRadius: "4px", color: "#4D2585", textDecoration: "none", cursor: "pointer", fontSize:"0.7rem"  }}>
                            <Link to="/search" style={{ color: "#4D2585", textDecoration: "none" }}>Search</Link>
                        </button>
                    </li>
                    <li>
                        <button className="outline secondary" style={{ padding: "8px 16px", backgroundColor: "transparent", border: "1px solid #4D2585", borderRadius: "4px", color: "#4D2585", textDecoration: "none", cursor: "pointer", fontSize:"0.7rem" }}>
                            <Link to="/signUp" style={{ color: "#4D2585", textDecoration: "none" }}>Sign in / Sign up</Link>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
