export const initialState = {
   basket: [],
   user: null,
   // incart: false,
};
// Selector
export const getBasketTotal = (basket) =>
   basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
   console.log(action);
   switch (action.type) {
      case "ADD_TO_BASKET":
         const inCart = state.basket.find((item) =>
            item.id === action.item.id ? true : false
         );
         return {
            ...state,
            basket: inCart
               ? state.basket.map((item) =>
                    item.id === action.item.id
                       ? { ...item, qty: item.qty + 1 }
                       : item
                 )
               : [...state.basket, { ...action.item, qty: 1 }],
         };

      case "INCREASE":
         return {
            ...state,
            basket: state.basket.map((item) =>
               item.id === action.item.id
                  ? {
                       ...item,
                       qty: +action.item.qty,
                    }
                  : item
            ),
         };

      case "EMPTY_BASKET":
         return {
            ...state,
            basket: [],
         };
      case "REMOVE_FROM_BASKET":
         const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
         );
         let newBasket = [...state.basket];

         if (index >= 0) {
            newBasket.splice(index, 1);
         } else {
            console.warn(
               `Cant remove product (id: ${action.id}) as its not in 
               basket!`
            );
         }

         return {
            ...state,
            basket: newBasket,
         };

      case "SET_USER":
         return {
            ...state,
            user: action.user,
         };
      default:
         return state;
   }
};

export default reducer;
