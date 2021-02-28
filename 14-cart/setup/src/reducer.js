const reducer = (state, action) => {
    let tempCart;
    switch (action.type) {
        case "LOADING":
            return {...state, loading:true}
        case "DISPLAY_DATA":
            return {...state, cart: action.payload.data, loading:false}
        case "CLEAR_CART":
            return { ...state, cart:[]}
        case "REMOVE_ITEM":
            return {...state, cart:state.cart.filter(i=>i.id!==action.payload.id)}
        case "MODIFY_QUANTITY":
            tempCart = state.cart.map(i=>{
                if(i.id===action.payload.id){
                    return {...i, amount:i.amount+action.payload.q}
                }
                return i
            }).filter(i=>i.amount>0);
            return {...state, cart: tempCart }
        case "UPDATE_TOTAL":
            const totalUpdated = state.cart.reduce( (acc, item) => {return {total:item.amount*item.price+acc.total,amount:item.amount + acc.amount}}, {total:0, amount:0})
            return {...state, total:totalUpdated.total, amount: totalUpdated.amount}
        default:
            break;
    }
    return state
}


export default reducer;