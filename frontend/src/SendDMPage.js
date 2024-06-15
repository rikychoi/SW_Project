import React, { useState } from "react";
import "./css/sendDMPage.css";

const SendDMPage = () => {
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        if (message.trim()) {
            alert(`Message sent: ${message}`);
            setMessage("");
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