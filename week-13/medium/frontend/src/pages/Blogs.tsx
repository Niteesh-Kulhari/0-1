import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"

export const Blogs = ()=>{
    const {loading, blogs} = useBlogs();
    //console.log(typeof(blogs[0].id))
    if(loading){
        return <div>
            Loading ........
        </div>
    }

    return <div>
            <Appbar/>
    <div className="flex justify-center">
        <div className=" max-w-xl">
            {blogs.map(blog => 
                <BlogCard
                id = {blog.id} 
                authorName={blog.author.name || "Anonymous"}
                title={blog.title}
                content= {blog.content}
                publishedDate={"18/04/2024"}/>
            )}
        </div>
        
    </div>
    </div> 
    
    
}