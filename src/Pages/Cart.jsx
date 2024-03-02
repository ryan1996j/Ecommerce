import { useNavigate, useParams } from "react-router-dom";
import { getData } from "../Data/app";
import { useContext, useEffect, useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import { StateContext } from "../Context/StateContext";

const Cart = () => {
    const { getCartDetail, cartData, setCartData, dispatch } = useContext(StateContext);
    const [cards, setCards] = useState([])

    const getSameCards = async () => {
        console.log(cartData.category);
        const response = await getData(`/products/category/${cartData.category}`);
        const filterCards = response.filter((item) => item.id !== cartData.id)
        console.log(filterCards);
        setCards(filterCards);
    };
    useEffect(() => {
        getCartDetail;
        getSameCards();
    }, [getCartDetail]);



    const addToCart = (product) => {
        console.log(product)
        dispatch({ type: "ADD_TO_CART", payload: product })

    }
    return (
        <div className="flex justify-between flex-wrap mt-6">

            {cartData && (
                <div className="w-96 h-fit mt-7 px-3 shadow-xl rounded-xl">
                    <img src={cartData.image} className="h-52 mx-auto mb-5" alt=""></img>
                    <h1 className="text-xl font-bold">{cartData.title}</h1>
                    <p className="text-gray-600 my-6 text-sm">{cartData.description}</p>
                    <div className="flex my-6 justify-between text-sm font-light text-gray-600">
                        <p>{cartData?.rating?.count} left</p>
                        <p className="flex items-center gap-1 text-black"><IoStarSharp /> {cartData?.rating?.rate}</p>
                        <p>${cartData.price}</p>
                    </div>
                    <div className=" flex justify-center items-center w-full  mb-4">
                        <button className="bg-black px-9 py-2  text-white uppercase text-sm" onClick={() => { addToCart(cartData) }}>Buy Now</button>
                    </div>
                </div>
            )}
            {cards.length > 0 && (
                <div className="w-[60%] my-8">
                    <div>
                        <h2 className="text-3xl text-center  w-full text-black font-bold">You may also like</h2>
                        <div className="flex border-1 gap-5 mt-7 flex-wrap ">
                            {cards.map((card) => (
                                <div key={card.id} onClick={() => getCartDetail(card.id)} className="border-2 border-black w-[230px] py-3 px-1 cursor-pointer hover:scale-105 transition-all">
                                    <img src={card.image} className="h-52 mx-auto mb-6" alt=""></img>
                                    <p>{card.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
