import { GiShop } from "react-icons/gi";
import { BsFillCartFill } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StateContext } from "../Context/StateContext";

const Navbar = () => {
    const navigate = useNavigate();

    const { state: { cart }, search, setSearch } = useContext(StateContext)
    const searchHandle = (e) => {
        setSearch(e.target.value)
    }
    return (
        <div className="fixed top-0 container mx-auto z-50 ">
            <nav className="flex justify-between items-center w-full h-12 bg-slate-300 ">
                <div className=" flex items-center h-full gap-2">
                    <div className=" text-3xl"> <GiShop /></div>
                    <p className="uppercase font-bold cursor-pointer" onClick={() => navigate("/")}>Online Store</p>
                </div>
                <div className="flex  items-center  pr-8">
                    <div className="text-lg w-fit  flex items-center px-3 gap-1 cursor-pointer  " onClick={() => { navigate("/Purchase") }}><BsFillCartFill /> {cart.length}</div>
                    <div className="flex items-center text-lg gap-1"><IoMdSearch className="text-xl" /> <input onChange={(e) => searchHandle(e)} value={search} type="text" className="outline-none rounded-xl w-36" placeholder="search..." /></div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
