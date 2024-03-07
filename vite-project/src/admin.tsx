import React, { useState } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

const ManageSchools: React.FC = () => {
    const [school, setSchool] = useState('');
    const [noPurchased, setNoPurchased] = useState<number>(0); // State to hold the number purchased
    const [schools, setSchools] = useState<{ name: string, purchased: number }[]>([]); // State to hold both school name and number purchased

    const handleSchoolChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSchool(event.target.value);
    };

    const handleNoPurchasedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNoPurchased(parseInt(event.target.value)); // Parse the value as an integer
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSchools([...schools, { name: school, purchased: noPurchased }]); // Store both the school name and number purchased
        setSchool('');
        setNoPurchased(0); // Reset the number purchased after submission
    };

    return (
        <>
            <NavBar />
            <div style={{ padding: "2%" }}>
                <h1>Manage Schools</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        School:
                        <input type="text" value={school} onChange={handleSchoolChange} />
                    </label>
                    <label>
                        No. Purchased:
                        <input type="number" value={noPurchased} onChange={handleNoPurchasedChange} />
                    </label>
                    <button type="submit" style={{ backgroundColor: '#4D2585', color: 'white' }}>Add School</button>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>School</th>
                            <th>No. Purchased</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>St. Mary's</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>St. John's</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>St. Joseph's</td>
                            <td>20</td>
                        </tr>
                        {schools.map((school, index) => (
                            <tr key={index}>
                                <td>{school.name}</td>
                                <td>{school.purchased}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    );
};

export default ManageSchools;
