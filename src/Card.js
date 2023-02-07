import React, { useState } from "react";
import Button from "./buttons/Button";
import Button2 from "./buttons/Button2";
import { rate } from "./ratingSlice";
import { useSelector, useDispatch } from "react-redux";

const Circle = ({ selected, onClick, value }) => (
    <div
        style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: selected ? "#41E3E5" : "#DFDFE6",
            display: "flex",
            flexDirection: "row",
            marginRight: 25,
            cursor: "pointer",
        }}
        onClick={onClick}
    >
        <div style={{ fontSize: 25, fontWeight: 500 }}>{value}</div>
    </div>
);

export default function Card() {
    const { rating } = useSelector((state) => state.rating);
    const dispatch = useDispatch();

    function updateRating(rating) {
        dispatch(rate(rating));
    }

    function submitRating() {
        console.log("rating is: ", rating);
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
                    <div
                        style={{
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "row",
                        }}
                    >
                        {[1, 2, 3, 4, 5].map((value) => (
                            <Circle
                                value={value}
                                key={value}
                                selected={value === rating}
                                onClick={() => updateRating(value)}
                            />
                        ))}
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
                    <Button2 submitRating={submitRating}></Button2>
                </div>
            </div>
        </div>
    );
}
