import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleToBookmark}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(()=> {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])


    return (
        <div className="md:w-2/3">
          <h3>Blogs</h3>
          {
            blogs.map(blog => <Blog
            blog={blog}
            key={blog.id}
            handleToBookmark={handleToBookmark}

            ></Blog>)  
          }
        </div>
    );
};

export default Blogs;