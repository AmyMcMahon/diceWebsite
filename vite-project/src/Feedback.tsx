import React, { ChangeEvent, FormEvent, useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const Feedback = () => {
    const [feedback, setFeedback] = useState('');
    const [feedbackList, setFeedbackList] = useState<string[]>([]);
    const [uploadedFile, setUploadedFile] = useState<File[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const fileList = Array.from(files);
            setUploadedFile(fileList);
        }
    };
    

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        // Perform form submission logic here, for example:
        console.log('Feedback submitted:', feedback);
        console.log('Files uploaded:', uploadedFile);
        // Add feedback to the feedback list
        if (feedback.trim() !== '') {
            setFeedbackList(prevFeedbackList => [...prevFeedbackList, feedback]);
        }
        // Reset form fields
        setFeedback('');
        setUploadedFile([]);    
    };

    const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        setFeedback(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>): void => {
        if (event.key === 'Enter') {
            handleSubmit(event as any); // Submit form on Enter key press
        }
    };

    return (
        <div>
            <NavBar />
            <div style={{margin: "2%"}}>
                <h1>Chat:</h1>
                <p>Submit your questions below. Upload a file with your order invoice if the question relates to an order.</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="feedbackInput">Feedback:</label>
                        <textarea
                            id="feedbackInput"
                            value={feedback}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            rows={4} // Adjust the number of rows as needed
                            cols={50} // Adjust the number of columns as needed
                        />
                    </div>
                    <div>
                        <label htmlFor="fileInput">Upload File:</label>
                        <input
                            type="file"
                            id="fileInput"
                            onChange={handleFileChange}
                            multiple // Allow multiple file selection
                        />
                    </div>
                    <button type="submit" style={{ backgroundColor: '#4D2585', color: 'white' }}>Submit</button>
                </form>
                <div style={{marginTop:"1%"}}>
                    <h2>Chat:</h2>
                    <ul>
                        {feedbackList.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                
            </div>
            <Footer />
        </div>
    );
};

export default Feedback;
