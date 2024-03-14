import { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const Home = () => {

    const [num, setNum] = useState(0);
 
    const randomNumberInRange = (min: number, max: number) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };
 
    const handleClick = () => {
        setNum(randomNumberInRange(1, 6));
    };

    const data = [
        { name: "1", students: 3 },
        { name: "2", students: 7 },
        { name: "3", students: 4 },
        { name: "4", students: 5 },
        { name: "5", students: 2 },
        { name: "6", students: 4 }
    ];
    
    return (
        <div>
            <NavBar/>
            <video autoPlay loop muted style={{width:"100%"}} >
                <source src="./video.mp4" type="video/mp4"></source>
            </video>
            <div style={{ position: "absolute", top: "20%", left: "0", width: "100%", height: "100%" }}>
                <div style={{ textAlign: "center"}}>
                    <h1 style={{ fontSize: "3em"}}>Welcome to D'ISE</h1>
                    <p style={{ fontSize: "1.5em" }}>Empowering interactive learning experiences for students and educators.</p>
                </div>
            </div>
            <div className='grid'> 
            <div style={{ margin: "5%"}}>
                <h1>SHAKE:</h1>
                <img src="./renderTransp.png" alt="Dice" style={{ transition: "transform 0.5s" }} className="shake" />

                <style>
                {`
                    @keyframes shake {
                        0% { transform: translate(1px, 1px) rotate(0deg); }
                        10% { transform: translate(-1px, -2px) rotate(-1deg); }
                        20% { transform: translate(-3px, 0px) rotate(1deg); }
                        30% { transform: translate(3px, 2px) rotate(0deg); }
                        40% { transform: translate(1px, -1px) rotate(1deg); }
                        50% { transform: translate(-1px, 2px) rotate(-1deg); }
                        60% { transform: translate(-3px, 1px) rotate(0deg); }
                        70% { transform: translate(3px, 1px) rotate(-1deg); }
                        80% { transform: translate(-1px, -1px) rotate(1deg); }
                        90% { transform: translate(1px, 2px) rotate(0deg); }
                        100% { transform: translate(1px, -2px) rotate(-1deg); }
                    }

                    .shake:hover {
                        animation: shake 0.5s infinite;
                    }
                    .shake:not(:hover) {
                        animation: none;
                    }
                `}
                </style>
            </div>
            <div className="wrapper" style={{ margin: "5%" }}>
                <h1>GENERATE:</h1>
                <button onClick={handleClick} style={{ fontSize: "2em", margin: "70px 100px", backgroundColor: '#4D2585', color: 'white', width:"30%", height:"30%" }}>
                    {num}
                </button>
            </div>
            <div style={{ margin: "5%" }}>
                <h1>LEARN:</h1>
                <BarChart width={300} height={250} data={data}>
                    <Bar dataKey="students" fill="#e09bdf" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </BarChart> 
            </div>
            
        </div>
        <Footer/>
        </div>
    );
};

export default Home;
