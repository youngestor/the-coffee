import actionTypes from '../actions/actionTypes'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initState = {
    cartAt: []
}

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD_CART:
            const idCart = state.cartAt.find(
                product => product._id === action.item._id
            )
            if (!idCart) {
                return {
                    ...state,
                    cartAt: [...state.cartAt, { ...action.item, quantity: 1 }]
                }
            }
            else {
                const newCart = state.cartAt
                const productIndex = newCart.findIndex(
                    product => product._id === action.item._id
                )
                newCart[productIndex].quantity++
                return {
                    ...state,
                    cartAt: [...newCart]
                }
            }
        case actionTypes.DELETE_CART:
            const newCart = state.cartAt
            const productIndex = newCart.findIndex(
                product => product._id === action.item._id
            )
            newCart.splice(productIndex, 1)
            return {
                ...state,
                cartAt: [...newCart]
            }
        default:
            return state
    }
}

const persistConfig = {
    key: 'cart',
    storage,
    whitelist: ['cartAt']
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

export default persistedReducer
