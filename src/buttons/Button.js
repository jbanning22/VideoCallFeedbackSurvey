import React, { useState } from "react";

function Button() {
    const [text, setText] = useState("Skip");

    function handleClick() {
        setText("Thanks for your feedback!");
    }

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 80,
                paddingRight: 150,
            }}
        >
            <button
                style={{
                    backgroundColor: "white",
                    borderWidth: 3,
                    height: 50,
                    width: 180,
                    fontWeight: "bold",
                    fontSize: 18,
                    borderRadius: 30,
                }}
            >
                Skip
            </button>
        </div>
    );
}
export default Button;
