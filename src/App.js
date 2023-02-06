import React, { useState, useEffect } from "react";
import Card from "./Card";

function App() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div
            style={{
                backgroundColor: "white",
                flex: 1,
                alignContent: "center",
                justifyContent: "center",
                height: "100vh",
                width: "100vw",
            }}
        >
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                    src="https://theme.zdassets.com/theme_assets/9460726/b2d9cfabe0da8a74a8f6393025e33fb878004725.png"
                    style={{
                        alignSelf: "center",
                        width: 300,
                        height: 300,
                    }}
                    alt="logo"
                />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Card />
            </div>
            <div>
                <footer style={{ display: "flex", justifyContent: "center" }}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt_Tg97znI0clkr5YXz8MpQwWnaD2WPMnYZA&usqp=CAU"
                        alt="footer logo"
                        style={{ paddingTop: 180 }}
                    />
                </footer>
            </div>
        </div>
    );
}

export default App;
