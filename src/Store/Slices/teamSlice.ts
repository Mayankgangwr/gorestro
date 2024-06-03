import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEmployee } from "../../Models";

interface IEmployees {
    employees: IEmployee[] | [];
};
const initialState: IEmployees = {
    employees: []
};
const teamSlice = createSlice({
    name: "team",
    initialState,
    reducers: {
        setEmployee: (state, action: PayloadAction<IEmployee[] | []>) => {
            state.employees = action.payload;
        },
        createEmployee: (state, action: PayloadAction<IEmployee>) => {
            state.employees = [...state.employees, action.payload];
        },
        updateEmployee: (state, action: PayloadAction<IEmployee>) => {
            const employeeIdx = state.employees.findIndex((employee: IEmployee) => employee.id === action.payload.id);
            if (employeeIdx !== -1) {
                state.employees[employeeIdx] = { ...action.payload };
            }
        },
        deleteEmployee: (state, action: PayloadAction<string>) => {
            const employeeIdx = state.employees.findIndex((employee: IEmployee) => employee.id === action.payload);
            if (employeeIdx !== -1) {
                state.employees.splice(employeeIdx, 1);
            }
        },
    },
});

export const { setEmployee, createEmployee, updateEmployee, deleteEmployee } = teamSlice.actions;
export default teamSlice.reducer;
