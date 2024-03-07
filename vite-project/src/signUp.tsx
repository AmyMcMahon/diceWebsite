import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

const SignUpPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Perform sign-up logic here
        console.log('Email:', email);
        console.log('Password:', password);
        // Assuming successful signup, set isLoggedIn to true
        setIsLoggedIn(true);
        // Redirect to home page
        navigate('/');
    };

    const [isSignUp, setIsSignUp] = useState(true);

    const handleToggle = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div>
            <NavBar/>
            <main className="container" style={{ marginTop: "40px", marginBottom: "30px" }}>
                <article className="grid">
                    <div>
                        <hgroup>
                            <h1 style={{marginBottom:"2%"}}>Sign {isSignUp ? 'Up' : 'In'}</h1>
                            <h2>Please enter your details</h2>
                        </hgroup>
                        <form onSubmit={handleSubmit}>
                            
                            <input type="email" name="Email" placeholder="Email" aria-label="Login" autoComplete="nickname"
                                required onChange={handleEmailChange} />
                            <input type="password" name="password" placeholder="Password" aria-label="Password"
                                autoComplete="current-password" required onChange={handlePasswordChange} />
                            <fieldset>
                                <label htmlFor="remember">
                                    <input type="checkbox" role="switch" id="remember" name="remember" />
                                    Remember me
                                </label>    
                            </fieldset>
                            {isSignUp ? (
                                <small>Have an account? <button onClick={handleToggle} style={{ backgroundColor: 'transparent', border: 'none', color: '#4D2585', cursor: 'pointer' }}>Click to sign in</button></small>
                            ) : (
                                <small>Don't have an account? <button onClick={handleToggle} style={{ backgroundColor: 'transparent', border: 'none', color: '#4D2585', cursor: 'pointer' }}>Click to sign up</button></small>
                            )}

                            <button type="submit" className="contrast" style={{ backgroundColor: '#4D2585', color: 'white' }}>{isSignUp ? 'Sign Up' : 'Sign In'}</button>
                        </form>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
};

export default SignUpPage;
