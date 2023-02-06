import React, { useState } from "react";

function RoundButton1() {
    const [bgColor, setBgColor] = useState("#DFDFE6");

    function bClick() {
        setBgColor("#41E3E5");
    }

    return (
        <div>
            <button
                onClick={bClick}
                style={{
                    backgroundColor: "#DFDFE6",
                    borderColor: "#DFDFE6",
                    borderWidth: 0,
                    height: 80,
                    width: 80,
                    borderRadius: 100,
                    margin: 10,
                    fontSize: 25,
                }}
            >
                1
            </button>
        </div>
    );
}
export default RoundButton1;
