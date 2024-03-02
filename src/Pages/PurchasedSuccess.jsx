import { Link } from "react-router-dom"

const PurchasedSuccess = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="bg-green-500 h-[300px] w-1/2 mx-auto flex flex-col  items-center justify-center">

                <p> You purchased successfully</p>
                <Link to={'/'}>
                    <button className="bg-blue-800 rounded-3xl py-3 px-4 text-white mt-5">Go back home</button>

                </Link>
            </div>
        </div>
    )
}

export default PurchasedSuccess
