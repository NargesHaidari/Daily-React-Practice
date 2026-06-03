

import { useState } from "react";

export default function DetailsToggle() {
    const [showDetails, setShowDetails] = useState(false);

    function handleClick() {
        setShowDetails(!showDetails);
    }

    return (
        <div className="container">
            <div
                className="toggle-btn"
                onClick={handleClick}
            >
                {showDetails ? "Hide details" : "Show details"}
            </div>

            {showDetails && (
                <div className="details">
                    React is a Javascript library for building user interfaces
                </div>
            )}
        </div>
    );
}