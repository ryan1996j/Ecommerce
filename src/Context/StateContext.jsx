// StateContext.js
import { createContext, useEffect, useReducer, useState } from 'react';
import { getData } from '../Data/app';
import { useNavigate } from 'react-router-dom';
const StateContext = createContext();

const StateProvider = ({ children }) => {
    const [porductList, setProductList] = useState([])
    const [cartData, setCartData] = useState({});
    const [search, setSearch] = useState("")
    const navigate = useNavigate();


    const initialState = {
        products: [],
        cart: []
    }


    const getProducts = async () => {
        const response = await getData("/products");
        const data = response;
        setProductList(data)

    };

    const reducer = ((state, action) => {
        const item = action.payload;
        switch (action.type) {
            case "GET_DATA":

                return ({ ...state, products: item });
            case "ADD_TO_CART":

                const existCart = state.cart.find((c) => c.id === item.id);
                return existCart ?
                    {
                        ...state,
                        cart: state.cart.map((c) =>
                            c.id === item.id ? { ...item } : { ...c }
                        ),
                    }
                    :
                    {
                        ...state,
                        cart: [...state.cart, { ...item }],

                    };
            case "REMOVE_FROM_CARD":
                return {
                    ...state,
                    cart: item,
                };
            case "CLEAR_ALL":
                return {
                    ...state,
                    cart: []
                }





            default:
                return state;
        }
    })


    useEffect(() => {
        getProducts();
    }, []);
    useEffect(() => {
        dispatch({ type: "GET_DATA", payload: porductList })
        const filterProducts = porductList.filter((pd) =>
            pd.title.toLowerCase().includes(search.toLocaleLowerCase())
        );
        dispatch({ type: "GET_DATA", payload: filterProducts })
    }, [porductList, search])
    const [state, dispatch] = useReducer(reducer, initialState)
    const getCartDetail = async (id) => {
        const response = await getData(`/products/${id}`)
        setCartData(response)
        navigate('/Cart')
    }
    const dataList = { state, dispatch, getCartDetail, cartData, setCartData, search, setSearch }



    return (
        <StateContext.Provider value={dataList}>
            {children}
        </StateContext.Provider>
    );
}

export { StateContext, StateProvider };
