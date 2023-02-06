import React, { useState } from "react";
import Button from "./buttons/Button";
import Button2 from "./buttons/Button2";
import RoundButton1 from "./buttons/RoundButton1";
import RoundButton2 from "./buttons/RoundButton2";
import RoundButton3 from "./buttons/RoundButton3";
import RoundButton4 from "./buttons/RoundButton4";
import RoundButton5 from "./buttons/RoundButton5";

export default function Card() {
    const [bgColor, setBgColor] = useState("#DFDFE6");

    function selectButton() {
        setBgColor("#41E3E5");
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                borderColor: "grey",
                border: "solid",
                borderWidth: 2,
                borderRadius: 25,
                width: 600,
                height: 450,
                alignSelf: "center",
                padding: 50,
            }}
        >
            <h1
                style={{
                    color: "black",
                    display: "flex",
                    alignSelf: "center",
                    justifyContent: "center",
                }}
            >
                We love to hear your feedback!
            </h1>
            <h2
                style={{
                    display: "flex",
                    alignSelf: "center",
                    justifyContent: "center",
                    color: "grey",
                }}
            >
                On a scale of 1-5, how likely are you to recommend this service?
            </h2>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    placeItems: "center",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: 30,
                    }}
                >
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <RoundButton1 selected={selectButton} />
                        <RoundButton2 selected={selectButton} />
                        <RoundButton3 selected={selectButton} />
                        <RoundButton4 selected={selectButton} />
                        <RoundButton5 selected={selectButton} />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <p
                            style={{
                                margin: 10,
                                color: "grey",
                                fontWeight: "bold",
                            }}
                        >
                            Not Likely
                        </p>
                        <p
                            style={{
                                margin: 10,
                                color: "grey",
                                fontWeight: "bold",
                            }}
                        >
                            Very Likely
                        </p>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <Button></Button>
                    <Button2></Button2>
                </div>
            </div>
        </div>
    );
}
