import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'Cart',
    initialState: {
        items: [],
        restName: ''
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        setRestName: (state, action) => {
            state.restName = action.payload;
        },
        removeItem: (state, action) => {
            let itemIndex = 0;
            state.items.map((item, index) => {
                (item.id === action.payload) ? itemIndex = index : '';
                return item;
            });
            state.items.splice(itemIndex, 1);
        },
        clearCart: (state) => {
            state.items = [];
        },
        clearRestName: (state) => {
            state.restName = '';
        }
    }
});

export const { addItem, setRestName, removeItem, clearCart, clearRestName } = cartSlice.actions;

export default cartSlice.reducer;