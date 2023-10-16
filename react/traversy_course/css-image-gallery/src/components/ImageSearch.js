import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    // prevent page from refreshing when submitted
    e.preventDefault();

    // run the searchText function passing in the text value
    searchText(text);
  };

  return (
    <div className="mx-auto my-10 max-w-sm overflow-hidden rounded">
      <form className="w-full max-w-sm" onSubmit={onSubmit}>
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <input
            onChange={(e) => setText(e.target.value)}
            className="mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-gray-700 focus:outline-none"
            type="text"
            placeholder="Search Image Term..."
          />
          <button
            className="flex-shrink-0 rounded border-4 border-teal-500 bg-teal-500 px-2 py-1 text-sm text-white hover:border-teal-700 hover:bg-teal-700"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
