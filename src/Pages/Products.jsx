// Products.js
import { useContext } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../Context/StateContext";

const Products = () => {
    const { state: { products }, getCartDetail, dispatch } = useContext(StateContext);
    /*  const addtoCart = () => {
         dispatch({ type: "ADD_TO_CART" })
     } */
    const addToCart = (product) => {

        dispatch({ type: "ADD_TO_CART", payload: product })

    }
    return (
        <div className="flex  flex-wrap gap-10 justify-center mt-16 ">
            {products?.map((product) => (
                <div key={product?.id} className='w-80 border-2 p-5 rounded-lg cursor-pointer hover:shadow-xl transform transition hover:scale-105' >
                    <img className="mx-auto h-[228px]" src={product?.image}></img>
                    <h3 className='text-header font-bold tracking-wider my-5'>{product?.title?.substring(0, 25)}...</h3>

                    <p>${product?.price}</p>
                    <div className="flex justify-around  mt-5  ">
                        <button className="bg-blue-300  border-1 border-black py-2 px-3 rounded-xl" onClick={() => addToCart(product)}>Add to Cart</button>

                        <button onClick={() => getCartDetail(product.id)} className="bg-blue-300  border-1 border-black py-2 px-3 rounded-xl">More Detail</button>



                    </div>
                </div>

            ))}
        </div>
    );
}

export default Products;
