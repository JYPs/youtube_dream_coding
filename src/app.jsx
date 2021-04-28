import React, { useCallback, useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_haeder/search_header";
import VideoDetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  // 함수형 컴포넌트 이기 때문에 관련된 state or props가 바뀌면 함수내 정의된 멤버변수가 다시 만들어진다.
  // 즉, search도 새롭게 만들어짐. --> state가 바뀔때 마다 search는 새로운 함수를 가르키게 된다 --> 따라서 search_header.jsx에 전달되는 props가 매번 바뀌기 때문에 search_header.jsx에 memo를 사용해도 리랜더 되는 이유이다
  // 이를 해결하기 위한 방법 : userCallback사용
  /* 
  Old version : 위의 문제점이 존재하는 version.
  const search = (query) => {
    youtube //
      .search(query)
      // .then(console.log)
      .then((videos) => {
        setVideos(videos);
        setSelectedVideo(null);
      });
  };
  */

  // New version : 최초 한번만 생성후 이후는 동일한 객체를 리턴해줌, 이상하네... console.log로 확인해보면 딱 한 번만 찍히는데... 하이라이트는 계속 나오는...???
  // useCallback : 한번 만들고 메모리에 보관 --> 잘못 사용하면 메모리에 부하를 줌
  const search = useCallback((query) => {
    youtube //
      .search(query)
      // .then(console.log)
      .then((videos) => {
        setVideos(videos);
        setSelectedVideo(null);
      });
  }, []);

  useEffect(() => {
    youtube //
      .mostPopular()
      // .then(console.log)
      .then((videos) => setVideos(videos));
  }, [youtube]);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
