import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    rating,
    total_view,
    thumbnail_url,
    details,
  } = news;

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200">
      {/* Author Info */}
      <div className="flex bg-base-200 items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold">{author?.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(author?.published_date).toLocaleDateString("en-GB")}
            </p>
          </div>
        </div>
        <div>
          <button className="btn btn-ghost btn-sm">
                <CiBookmark size={24} />
                <CiShare2 size={24} />
          </button>
        </div>
      </div>

      {/* News Content */}
      <div className="px-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <figure>
          <img
            src={thumbnail_url}
            alt="News Thumbnail"
            className="rounded-lg w-full"
          />
        </figure>
        <p className="text-sm text-gray-600 mt-2">
          {details.slice(0, 180)}...
          <span className="text-blue-500 cursor-pointer font-medium ml-1">
            Read More
          </span>
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t">
        <div className="flex items-center gap-2 text-yellow-500">
          <FaStar />
          {
            Array.from({length:rating.number}).map((_,i)=>(<FaStar key={i} />))
          }
          <span className="font-medium text-gray-700">
            {rating?.number}</span>

            {/* <span className="font-medium text-gray-700">
            {rating?.number} <span className="text-gray-400">({rating?.badge})</span>
          </span> */}
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
