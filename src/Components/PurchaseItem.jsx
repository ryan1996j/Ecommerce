import { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { StateContext } from "../Context/StateContext";

const PurchaseItem = ({ item, increasePrice, decreasePrice, removeItem }) => {
    const { dispatch } = useContext(StateContext)
    const [quantity, setQuantity] = useState(1);
    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1)
        increasePrice(item.price)

    }
    const decreaseQuantity = () => {
        quantity > 1 &&
            setQuantity((prev) => prev - 1)
        decreasePrice(item.price)

    }
    /*  removeItem = (item) => {
         dispatch(({ type: "REMOVE_FROM_CARD", payload: item }))
     } */


    return (
        <div>
            <div key={item.id} className="border-b-2 border-black flex gap-5 py-6">

                <div className="flex gap-5 items-center w-48">
                    <img src={item.image} className="h-32"></img>

                </div>
                <div className="flex  w-full justify-around pt-3">
                    <div className=" w-48 text-wrap text-center  ">
                        <h1 className="mb-3 font-semibold" >Name</h1>
                        <h2>{item.title}</h2>
                    </div>

                    <div className=" text-center 00 w-60">
                        <h1 className="mb-3 font-semibold">Each</h1>
                        <h2>${item.price}</h2>
                    </div>
                    <div className=" text-center  w-60">
                        <h1 className="mb-3 font-semibold">Quantity</h1>
                        <div className="flex gap-2 justify-center ">
                            <h1 className="cursor-pointer" onClick={() => increaseQuantity()}>+</h1> <h2>{quantity}</h2><h1 className="cursor-pointer" onClick={() => decreaseQuantity()}>-</h1>
                        </div>
                    </div>
                    <div className=" text-center   w-60">
                        <h1 className="mb-3 font-semibold" >Total</h1>
                        <h2>${(item.price * quantity).toFixed(2)}</h2>
                    </div>
                    <div className="flex  " >< MdDelete onClick={() => removeItem(item)} className=" text-red-600  w-full h-8 cursor-pointer " />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PurchaseItem
