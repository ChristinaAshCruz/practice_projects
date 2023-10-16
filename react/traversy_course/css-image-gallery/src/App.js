import "./assets/App.css";
import React, { useState, useEffect } from "react";

import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`,
    )
      .then((res) => res.json())
      .then((data) => {
        // setting our images to the object's data and put it into our state
        setImages(data.hits);
        // setting our isLoading to false, since we have received the data
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
    // need to add term as a dependency
    // this will allow us to reset the data and send a data request to the API using the new search term value
  }, [term]);

  return (
    <div className="container mx-auto">
      {/* show when page is loading */}

      <ImageSearch searchText={(text) => setTerm(text)} />

      {/* if isLoading returns false and there are no image returned */}
      {!isLoading && images.length === 0 && (
        <h1 className="mx-auto mt-32 text-center text-5xl">No Images Found</h1>
      )}

      {/* if isLoading returns true, but images.length is not empty... */}
      {isLoading ? (
        <h1 className="mx-auto mt-32 text-center text-6xl">Loading...</h1>
      ) : (
        // if isLoading returns false, but images.length is not empty...
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            // need to pass in a key since we are creating a list
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
