import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Salim: React.FC = () => {
    return (
        <>
        <NavBar/>
        <div style={{margin:"2%"}}>
            <h1>Salim Component</h1>
            <table>
                <thead>
                    <tr>
                        <th>Element</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Intuitive user interface and an enhanced user experience</td>
                        <td>NavBar <br/> <Link to="/contact" className="contrast" >Menu</Link></td>
                    </tr>
                    <tr>
                        <td>Create a form of sign-up/sign-in</td>
                        <td><Link to="/signUp" className="contrast" >Login / SignUp</Link></td>
                    </tr>
                    <tr>
                        <td> Integrate features to track the feedback, and facilitate communication between users and administrators</td>
                        <td><a href="/feedback" style={{color:"#321856"}}>Feedback</a></td>
                    </tr>
                    <tr>
                        <td> Create a form that supports ( upload/ download materials)</td>
                        <td><a href="/feedback" style={{color:"#321856"}}>Feedback</a></td>
                    </tr>
                    <tr>
                        <td>  Create a search engine that optimizes the website's structure, content, and metadata for improved search engine visibility</td>
                        <td><a href="/search" style={{color:"#321856"}}>Search Page</a></td>
                    </tr>
                    <tr>
                        <td>Develop a responsive design that adapts seamlessly across various devices</td>
                        <td>Make webpage smaller</td>
                    </tr>
                    <tr>
                        <td>Develop a user-friendly CMS to allow easy management and updating of website content</td>
                        <td><a href="/admin" style={{color:"#321856"}}>On Admin Page</a></td>
                    </tr>
                    <tr>
                        <td>Enable administrators to create and manage different user roles and permissions</td>
                        <td><a href="/admin" style={{color:"#321856"}}>Admin</a></td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
        <Footer/>
        </>
    );
};

export default Salim;