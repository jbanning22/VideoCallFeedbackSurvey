import React, { useState } from "react";

function Button2() {
    const [text, setText] = useState("Skip");

    function handleClick() {
        setText("Thanks for your feedback!");
    }

    return (
        <div style={{ marginTop: 80 }}>
            <button
                style={{
                    backgroundColor: "#2FADF5",
                    borderColor: "#2FADF5",
                    borderWidth: 0,
                    fontWeight: "bold",
                    fontSize: 18,
                    height: 50,
                    width: 180,
                    borderRadius: 30,
                    color: "white",
                }}
            >
                Submit
            </button>
        </div>
    );
}
export default Button2;
