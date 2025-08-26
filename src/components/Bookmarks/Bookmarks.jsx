import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {


    return (
        <div className='ml-3 bg-gray-200 mt-4 rounded-lg p-4'>

            <h3 className='font-bold'>Bookmarked Blogs: {bookmarks.length}</h3>

            {
                bookmarks.map(bookmark => <Bookmark
                bookmark={bookmark}></Bookmark>)
            }
            
        </div>
    );
};

export default Bookmarks;