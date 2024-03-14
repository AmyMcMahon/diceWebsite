import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import Chart from 'chart.js/auto'; // Import Chart.js
import Footer from './Footer';

const Data: React.FC = () => {
    const baseURL = 'https://d1cb9cce2u0y9y.cloudfront.net';
    const [selectedValue, setSelectedValue] = useState('');
    const [diceData, setDiceData] = useState([]);
    const [chartInstance, setChartInstance] = useState<Chart | null>(null);

    useEffect(() => {
        if (selectedValue) {
            axios
                .get(`${baseURL}/${selectedValue}`)
                .then((response) => {
                    setDiceData(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        }
    }, [selectedValue]);

    useEffect(() => {
        if (diceData.length > 0) {
            renderChart();
        }
    }, [diceData]);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
    };

    const renderChart = () => {
        if (chartInstance) {
            chartInstance.destroy(); // Destroy previous chart instance
        }
    
        const possibleNumbers = Array.from({ length: parseInt(selectedValue, 10) }, (_, index) => index + 1); // Generate array of possible numbers
    
        const rolledNumbers = diceData.map((item: any) => item.number);
        const countsMap = rolledNumbers.reduce((acc, curr) => {
            acc[curr] = (acc[curr] || 0) + 1;
            return acc;
        }, {});
    
        const dataCounts = possibleNumbers.map(num => countsMap[num] || 0); // Create counts array including zeros for unrolled numbers
    
        const ctx = document.getElementById('diceChart') as HTMLCanvasElement;
        const newChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: possibleNumbers.map(String), // Convert numbers to strings for labels
                datasets: [
                    {
                        label: `Distribution of Numbers for ${selectedValue}-sided Dice`,
                        data: dataCounts,
                        backgroundColor: 'rgb(222, 207, 237)',
                        borderColor: 'rgb(77, 37, 133)',
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Number of Rolls',
                        },
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Rolled Number',
                        },
                    },
                },
            },
        });
    
        setChartInstance(newChartInstance); // Save the new chart instance
    };

    return (
        <>
            <NavBar />
            <div style={{ padding: '2%' }}>
                <h1>Dice Data:</h1>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <select name="diceFace" id="diceFace" onChange={handleSelectChange} style={{marginTop:"1.5%"}}>
                        <option value="" disabled selected>
                            Choose your value
                        </option>
                        <option value="6">6</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                        <option value="20">20</option>
                    </select>
                    <button onClick={() => window.location.reload()} style={{ color: "#FFFFFF", backgroundColor: "#4D2585", marginLeft: '10px' }}>Update</button>
                </div>
                <p>
                    Study the distribution of the data here. Select your dice face and see how many of each number has been rolled. Each roll of the dice represents a random outcome, and studying the frequency of different results provides insights into the probabilities involved. In this interactive chart, you can select the number of sides on your dice, ranging from common six-sided dice to more specialized variations like ten, twelve, or twenty-sided dice.
                </p>
                <canvas id="diceChart" width="400" height="200"></canvas>
            </div>
            <Footer />
        </>
    );
};

export default Data;
