import React, { useState } from "react";
import "./css/sendDMPage.css";

const SendDMPage = () => {
    const [message, setMessage] = useState("");

    const handleSendMessage = async () => {
        if (message.trim()) {
            try {
                const response = await fetch('http://localhost:5000/send_dm', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message }),
                });

                const data = await response.json();
                if (response.ok) {
                    alert(`Message sent: ${data.message}`);
                    setMessage("");
                } else {
                    alert(`Error: ${data.error}`);
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred while sending the message.');
            }
        } else {
            alert("Message is empty");
        }
    };

    const handleInput = (e) => {
        setMessage(e.target.value);
        e.target.style.height = "auto"; 
        e.target.style.height = `${e.target.scrollHeight}px`; 
    };

    return (
        <div className="screen">
            <div className="send-DM">
                <div className="div">
                    <div className="text-wrapper-2">DM</div>
                    <div className="text-field">
                        <textarea
                            className="input"
                            placeholder="Enter message"
                            value={message}
                            onChange={handleInput}
                            rows="1"
                            style={{ overflow: "hidden" }}
                        />
                    </div>
                </div>
                <button className="button" onClick={handleSendMessage}>
                    <div className="frame">
                        <div className="send">Send</div>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default SendDMPage;