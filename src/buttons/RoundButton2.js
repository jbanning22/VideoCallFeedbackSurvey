import React, { useState } from "react";

function RoundButton2(props) {
    const [bgColor, setBgColor] = useState("#DFDFE6");
    const { selected } = props;
    // const [text, setText] = useState("Skip");

    // function handleClick() {
    //     setText("Thanks for your feedback!");
    // }

    return (
        <div>
            <button
                // onClick={selected}
                style={{
                    backgroundColor: bgColor,
                    borderColor: "#DFDFE6",
                    borderWidth: 0,
                    height: 80,
                    width: 80,
                    borderRadius: 100,
                    margin: 10,
                    fontSize: 25,
                }}
            >
                2
            </button>
        </div>
    );
}
export default RoundButton2;
