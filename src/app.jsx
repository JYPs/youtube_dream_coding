import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_haeder/search_header";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    youtube //
      .search(query)
      // .then(console.log)
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube //
      .mostPopular()
      // .then(console.log)
      .then((videos) => setVideos(videos));
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
