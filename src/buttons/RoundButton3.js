import React, { useState } from "react";

function RoundButton3() {
    const [bgColor, setBgColor] = useState("#DFDFE6");
    // const [text, setText] = useState("Skip");

    // function handleClick() {
    //     setText("Thanks for your feedback!");
    // }

    return (
        <div>
            <button
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
                3
            </button>
        </div>
    );
}
export default RoundButton3;
