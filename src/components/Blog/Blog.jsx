
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({blog, handleToBookmark}) => {

    const {title,cover_photo,reading_time, author_img, author_name, post_date,hashTag} = blog;

    return (
        <div>
            <img className="w-full rounded-lg" src={cover_photo} alt="" />
            <div className="flex items-center justify-between">
                <div className="flex items-center" >
                    <img className=" w-14 rounded-full" src={author_img} alt="" />

                    <div className="ml-6">
                        <h3>{author_name}</h3>
                        <p>{post_date}</p>
                    </div>

                </div>

                <div>

                    <span>{reading_time} min read </span>
                    <button onClick={() => handleToBookmark(blog)}><FaRegBookmark /></button>
                    

                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashTag.map((hash, idx)=> <span key={idx}> {hash} <a href=""></a> </span>)
                }
            </p>
        </div>
    );
};

export default Blog;