import '../App.css';

import { useState } from "react";

export default function StatusToggle() {
    const [isOnline, setIsOnline] = useState(false);
    const [statusBg, setStatusBg] = useState('#EF9A9A');

    function handleClick() {
        if (isOnline) {
            setIsOnline(false);
            setStatusBg('#EF9A9A');
        } else {
            setIsOnline(true);
            setStatusBg('#81C784');
        }
    }

    return (
        <div className="container">
            <button
                className="change-status"
                onClick={handleClick}
            >
                Change Status
            </button>

            <div
                className="status"
                style={{
                    color: isOnline ? "#2E7D32" : "#C62828",
                    backgroundColor: statusBg
                }}
            >
                {isOnline ? "🟢 Online" : "🔴 Offline"}
            </div>
        </div>
    );
}