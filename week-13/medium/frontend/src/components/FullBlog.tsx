import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({blog} : {blog: Blog} )=>{
    return <div>
        <Appbar/>
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-2xl">
                <div className="col-span-8">
                    <div className=" text-3xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-400 pt-2">
                        Posted on 2nd December 2023
                    </div>
                    <div className="pt-2">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="text-lg text-slate-500">
                        Author
                    </div>
                    
                    <div className="flex w-full">
                        <div className="pr-4 flex flex-col justify-center">
                            <Avatar name={blog.author.name || "Jane"} size="big"/>
                        </div>
                        <div>
                            <div className="text-lg font-bold pt-2">
                                {blog.author.name || "Jane Doe"}
                            </div>
                            
                            <div className="text-sm text-slate-400 pt-1">
                                Random catch phrase about the author that will catch use rattention
                            </div>
                        </div>
                    </div>
                        
                </div>
                
            </div>
        </div>
    </div>
           
}