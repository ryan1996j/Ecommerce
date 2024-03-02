import { useContext, useEffect, useState } from "react"
import { StateContext } from "../Context/StateContext"
import PurchaseItem from "../Components/PurchaseItem";
import { Link, useNavigate } from "react-router-dom";

const Purchase = () => {
    const { state, dispatch } = useContext(StateContext);
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();
    const increasePrice = (price) => {
        setTotal(total + price)
    }
    const decreasePrice = (price) => {
        setTotal(total - price)
    }
    const removeItem = (item) => {
        const updatedCart = state.cart.filter((c) => c.id !== item.id);
        console.log(updatedCart)
        console.log(updatedCart)

        dispatch(({ type: "REMOVE_FROM_CARD", payload: updatedCart }))


    }
    const clearAll = () => {
        navigate("/")
        dispatch(({ type: "CLEAR_ALL" }))
    }
    const purchased = () => {
        navigate("/PurchasedSuccess")
        dispatch(({ type: "CLEAR_ALL" }))


    }
    useEffect(() => {
        setTotal(state.cart.reduce((initial, current) => initial + current.price, 0));
    }, [state.cart])
    return (
        <div className="mt-12">


            <div className="w-full mt-11">
                {state.cart.length > 0 ? (
                    <div>
                        <h1 className="font-bold text-center uppercase tracking-widest ">The items you added</h1>
                        {state.cart.map((item) => (
                            <PurchaseItem
                                item={item}
                                key={item.id}
                                increasePrice={increasePrice}
                                decreasePrice={decreasePrice}
                                removeItem={removeItem}
                            />
                        ))
                        }
                        <div className="w-2/5 mx-auto text-center py-6 my-3">
                            <p onClick={clearAll} className="py-2 text-gray-500 cursor-pointer underline">clear all</p>
                            <h1 className="font-bold uppercase text-md tracking-wider ">Total-<span className="font-sm ">${total.toFixed(2)}</span> </h1>

                            <button onClick={purchased} className="bg-blue-600 text-white py-3 px-6 rounded-2xl mt-3 text-sm uppercase tracking-widest ">Purchase</button>

                        </div>
                    </div>
                )
                    : (
                        <p>You have not choosen anything</p>
                    )}

            </div>

        </div >
    )
}

export default Purchase
