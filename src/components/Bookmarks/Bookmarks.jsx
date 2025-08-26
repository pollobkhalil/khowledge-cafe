import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="mt-12">
      <div className="ml-3 mt-4">
        <h3 className="text-center text-xl p-3 border-2 border-blue-400 rounded-lg">
          Spent time on read:{readingTime}
        </h3>
      </div>

      <div className=" w-full md:w-full lg:w-md ml-3 bg-gray-200 mt-4 rounded-lg p-4">
        <h3 className="font-bold">Bookmarked Blogs: {bookmarks.length}</h3>

        {bookmarks.map((bookmark) => (
          <Bookmark bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
