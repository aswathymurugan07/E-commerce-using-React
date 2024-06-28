import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice ({
    name: "cart",
    initialState:{
        items: []
    },
    reducers:{
        itemsAdded:(state,action)=>{
            const addedItem=state.items.find((x)=>x.id===action.payload.id)
            if(addedItem){
               addedItem.quantity+=1
            }
            else{
                state.items.push({...action.payload,quantity:1})
            }
          
        },
        itemsRemoved:(state,action) => {        
            state.items = state.items.filter((item) => item.id !== action.payload);
        }, 
        itemsIncrease:(state,action) =>{
            const addedItem=state.items.find((x)=>x.id===action.payload)
            if(addedItem){
               addedItem.quantity+=1
            }
        },
        itemsDecrease:(state,action) => {
            const addedItem=state.items.find((x)=>x.id===action.payload)
            if(addedItem && addedItem.quantity>1){
               addedItem.quantity-=1
            }
            else if(addedItem && addedItem.quantity===1){
                state.items = state.items.filter((item) => item.id !== action.payload);
            }            
        },

    } 
})

export const {itemsAdded,itemsRemoved,itemsIncrease,itemsDecrease}= cartSlice.actions
export default cartSlice.reducer