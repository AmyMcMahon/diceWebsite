import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const counties = 
['Antrim', 'Armagh', 'Carlow', 'Cavan', 'Clare', 'Cork', 'Derry', 'Donegal', 'Down', 'Dublin', 'Fermanagh', 'Galway', 'Kerry', 'Kildare', 'Kilkenny', 'Laois', 'Leitrim', 'Limerick', 'Longford', 'Louth', 'Mayo', 'Meath', 'Monaghan', 'Offaly', 'Roscommon', 'Sligo', 'Tipperary', 'Tyrone', 'Waterford', 'Westmeath', 'Wexford', 'Wicklow'] // Replace with your own county options

const OrderForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [school, setSchool] = useState('');
    const [selectedCounty, setSelectedCounty] = useState('');
    const [numDice, setNumDice] = useState(0);
    const [colors, setColors] = useState<string[]>([]);
    const [termsChecked, setTermsChecked] = useState(false); // New state for terms and conditions checkbox

    const handleCheckboxChange = (color: string) => {
        if (colors.includes(color)) {
            setColors(colors.filter((c) => c !== color));
        } else {
            setColors([...colors, color]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
    };

    const handleTermsChange = () => {
        setTermsChecked(!termsChecked);
    };

    return (
        <div>
            <NavBar/>
            <div style={{padding:'5px'}}>
                <header className="header">
                    <h1 className="display-2" style={{ display: 'flex', justifyContent: 'center', paddingTop: '5px'}}>Order Form</h1>
                </header>
                <form onSubmit={handleSubmit}>
                    <div style ={{paddingBottom: '5px'}}>
                        <label>
                            Name:
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </label>
                    </div>
                    <div style ={{paddingBottom: '5px'}}>
                        <label>
                            Email:
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                    </div>
                    <div style ={{paddingBottom: '5px'}}>
                        <label>
                            School:
                            <input type="text" value={school} onChange={(e) => setSchool(e.target.value)} />
                        </label>
                    </div>
                    <div style ={{paddingBottom: '5px'}}>
                        <label>
                            County:
                            <select value={selectedCounty} onChange={(e) => setSelectedCounty(e.target.value)}>
                                <option value="">Select a county</option>
                                {counties.map((county) => (
                                    <option key={county} value={county}>
                                        {county}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div style={{ paddingBottom: '5px' }}>
                        <label>
                            Number of dice needed:
                            <input
                                type="number"
                                value={numDice}
                                onChange={(e) => setNumDice(Number(e.target.value))}
                                style={{ width: '50px' }} // Adjust the width value as needed
                            />
                        </label>
                    </div>
                    <div style ={{paddingBottom: '5px'}}>
                        <label>
                            Colors:
                            <div>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={colors.includes('white')}
                                        onChange={() => handleCheckboxChange('white')}
                                    />
                                    White
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={colors.includes('purple')}
                                        onChange={() => handleCheckboxChange('purple')}
                                    />
                                    Purple
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={colors.includes('black')}
                                        onChange={() => handleCheckboxChange('black')}
                                    />
                                    Black
                                </label>
                            </div>
                        </label>
                    </div>
                    <div style ={{paddingBottom: '5px'}}>
                        <label>
                            <input
                                type="checkbox"
                                checked={termsChecked}
                                onChange={handleTermsChange}
                                required // Make the checkbox compulsory
                            />
                            I agree to the terms and conditions
                        </label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <Footer/>
        </div>
    );
};

export default OrderForm;
