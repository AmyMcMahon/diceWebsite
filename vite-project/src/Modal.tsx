import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    return (
        <>
            {isOpen &&
                <div className="modal-overlay" style={{ position: "fixed", top: "0px", left: "0px", width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div className="modal" style={{backgroundColor: "white", padding: "20px", borderRadius: "5px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)"}}>
                        <h2>Thank you for your feedback!</h2>
                        <p>We will reply shortly.</p>
                        <button onClick={onClose} style={{backgroundColor:"#4D2585", color:"white"}}>OK</button>
                    </div>
                </div>
            }
        </>
    );
};

export default Modal;
