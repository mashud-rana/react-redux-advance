import {createSlice} from '@reduxjs/toolkit'

const initialState={
    cardIsVisible:false
}
const uiSlice=createSlice({
    name:"Card-slice",
    initialState,
    reducers:{
        toggle(state){
            state.cardIsVisible=!state.cardIsVisible
        }
    }
});

const {actions,reducer}=uiSlice;

export const {toggle}=actions;

export default reducer;