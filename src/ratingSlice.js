import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    rating: 0,
};

export const ratingSlice = createSlice({
    name: "rating",
    initialState,
    reducers: {
        rate: (state, action) => {
            state.rating = action.payload;
        },
    },
});

export const { rate } = ratingSlice.actions;
export default ratingSlice.reducer;
