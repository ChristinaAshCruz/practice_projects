import React from "react";

const ImageCard = ({ image }) => {
  // setup to go through our tags array
  const tags = image.tags.split(",");

  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg">
      <img src={image.webformatURL} alt="" className="w-full" />

      <div className="px-6 py-4">
        <div className="text-xl font-bold text-purple-500">
          Photo By {image.user}
        </div>
        <ul>
          {/* will be placing data from our API here */}
          <li>
            <strong>Views:</strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads:</strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes:</strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {/* using map to go through each tag in our 'tags' variable above */}
        {tags.map((tag, index) => (
          // don't forget that when you use maps, you must add a key attribute
          <span
            key={index}
            className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
