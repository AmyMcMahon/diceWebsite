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
                <input style={{ paddingTop: "5px", width:"50%"}}
                    type="search"
                    name="search"
                    placeholder="Search"
                    aria-label="Search"
                />

                        <Link to="/signUp" className="contrast" style={{paddingLeft:"5%"}}>Sign in / Sign up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
