import React, { useState } from 'react';
import List from "./Components/list"
import NavBar from './NavBar';
import Footer from './Footer';

const Search: React.FC = () => {

    const [inputText, setInputText] = useState("");
    let inputHandler = (e: { target: { value: string; }; }) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <>
            <NavBar />
            <div className="main" style={{padding:"2%"}}>
            <h1>Search Page:</h1>
            <div className="search">
                <input
                placeholder="Search..."
                type= "search"
                onChange={inputHandler}
                />
            </div>
            <List input={inputText} />
            </div>
            <Footer />
        </>
    );
};

export default Search;