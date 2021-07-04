import { ActionTypes } from "../constants/action-types";

const initialState = {
    products : [],
    loading:true
}

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state, 
                products: payload, 
                loading:false
            };
        case ActionTypes.PRODUCTS_ERROR:
        return{
            loading: false, 
            error: payload 
        }    
        default:
            return state;
    };
};

export const selectedProductReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {
                ...state, 
                ...payload, 
                loading:false
            };
        case ActionTypes.PRODUCTS_ERROR:
            return{
                loading: false, 
                error: payload 
            }; 
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return { };  
               
        default:
            return state;
    };
};

