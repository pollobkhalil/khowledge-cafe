
const Bookmark = ({bookmark}) => {

    const {title} = bookmark

    return (
       

            

        <div className="bg-white py-3 rounded-lg mt-4 px-2">

            <p>{title}</p>
        </div>
        
    );
};

export default Bookmark;