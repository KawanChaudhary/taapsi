import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
        },
        decreaseQuantity: (state, action) => {
            const ind = state.products.findIndex((item) => item._id === action.payload)
            if (state.products[ind].quantity > 1) {
                state.products[ind].quantity -= 1
            }
            else {
                toast.info("You can't decrease now.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

            }
        },
        increaseQuantity: (state, action) => {
            const ind = state.products.findIndex((item) => item._id === action.payload)
            if (state.products[ind].quantity < 4) {
                state.products[ind].quantity += 1
            }
            else {
                toast.info("You can't increase now.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

            }
        },
        totalPrice: (state, action) => {
            let { total, quantity } = state.products.reduce(
                (cartTotal, item) => {
                    const { price, quantity } = item;
                    const itemTotal = price * quantity;

                    cartTotal.total += itemTotal;
                    return cartTotal
                },
                {
                    total: 0,
                    quantity: 0
                }
            )
            state.total = total;
        },
        deleteProduct: (state, action) => {
            state.quantity -= 1;
            state.products.splice(
                state.products.findIndex((item) => item._id === action.payload),
                1
            );

        },
        deleteCart: (state) => {
            state.quantity = 0;
            state.products = [];
            state.total = 0;
        }
    },
});

export const { addProduct, deleteProduct, deleteCart, decreaseQuantity, increaseQuantity, totalPrice } = cartSlice.actions;
export default cartSlice.reducer;