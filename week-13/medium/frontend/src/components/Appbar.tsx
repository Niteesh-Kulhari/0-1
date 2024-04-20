import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = ()=>{
    return <div className="border-b flex justify-between px-10 py-3">
        
            <div className="flex justify-center flex-col cursor-pointer font-bold">
                <Link to={"/blogs"}>
                Medium
                </Link>
            </div>
        <div>
        <Link to={"/publish"}>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-6 rounded-full text-xs">
                    Create new Blog
            </button>
        </Link>
            <Avatar name="Niteesh" size={"big"} />
        </div>
    </div>
}