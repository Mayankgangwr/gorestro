import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../Models";

interface IProducts {
    products: IProduct[] | [];
};
const initialState: IProducts = {
    products: []
};
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProduct: (state, action: PayloadAction<IProduct[] | []>) => {
            state.products = action.payload;
        },
        createProduct: (state, action: PayloadAction<IProduct>) => {
            state.products = [...state.products, action.payload];
        },
        updateProduct: (state, action: PayloadAction<IProduct>) => {
            const employeeIdx = state.products.findIndex((employee: IProduct) => employee.id === action.payload.id);
            if (employeeIdx !== -1) {
                state.products[employeeIdx] = { ...action.payload };
            }
        },
        deleteProduct: (state, action: PayloadAction<string>) => {
            const employeeIdx = state.products.findIndex((employee: IProduct) => employee.id === action.payload);
            if (employeeIdx !== -1) {
                state.products.splice(employeeIdx, 1);
            }
        },
    },
});

export const { setProduct, createProduct, updateProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
