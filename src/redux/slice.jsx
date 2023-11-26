import { createSlice } from '@reduxjs/toolkit'
const intiolValue = {
    cards: [{ status: false, id: 1, name: "yellow" }, { status: false, id: 2, name: "blue" }, { status: false, id: 3, name: "blue" }, { status: false, id: 4, name: "orange" }, { status: false, id: 5, name: "pink" }, { status: false, id: 6, name: "orange" }, { status: false, id: 7, name: "yellow" }, { status: false, id: 8, name: "pink" }],
    opencard: null,

}


const cardsSlice = createSlice({


    name: "cards",

    initialState: intiolValue,
    reducers: {
        open: (state, action) => {


            // מעדכן את ערך הסטטוס במערך
            state.cards.map((item => item.id === action.payload.payload.id ? item.status = true : false))
            




        },

        filter: (state, action) => {

            {
                

                {
                    state.opencard?.name === action.payload.payload.name && state.opencard.id !== action.payload.payload.id ?

                    state.cards = state.cards.filter(o => o.id !== state.opencard.id && o.id !== action.payload.payload.id) :
                    state.cards.map((item) => item.status = false)
                }
                state.opencard=null

            }
        },

        filter2: (state, action) => {
            state.opencard = action.payload.payload


        }
  






    }

})
export const { open, filter,filter2 } = cardsSlice.actions

export default cardsSlice.reducer