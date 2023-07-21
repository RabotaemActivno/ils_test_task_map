import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: []
}

const nav = [
   [ [59.84660399, 30.29496392], [59.82934196, 30.42423701], [59.83567701, 30.38064206],],
   [ [59.82934196, 30.42423701], [59.82761295, 30.41705607], [59.84669399, 30.29496392],],
   [ [59.83567701, 30.38064206], [59.84660399, 30.29496392], [59.82761295, 30.41705607]]
]

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        selectСoord: (state, action) => {
            state.value = nav[Number(action.payload)];
        }
    }
})

export const { selectСoord } = navigationSlice.actions
export default navigationSlice.reducer