import React from "react";
import styles from "./video_item.module.css";

// New version --> old version에서 '호이' keyword 검색시 key값이 중복이라는 warning이 발생하여 확인하기 위해 New version으로 변경해봄.
// 결국 같은 기능임.. 단순히 console 확인하기 위함.
const VideoItem = ({
  video,
  video: { snippet, id },
  onVideoClick,
  display,
}) => {
  // console.log("video id :::", id, display);
  const displayType = display === "list" ? styles.list : styles.grid;
  return (
    <li
      className={`${styles.container} ${displayType}`}
      onClick={() => onVideoClick(video)}
    >
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt="video thumbnail"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

// Old version
// const VideoItem = ({ video: { snippet } }) => (
//   <li className={styles.container}>
//     <div className={styles.video}>
//       <img
//         className={styles.thumbnail}
//         src={snippet.thumbnails.medium.url}
//         alt="video thumbnail"
//       />
//       <div className={styles.metadata}>
//         <p className={styles.title}>{snippet.title}</p>
//         <p className={styles.channel}>{snippet.channelTitle}</p>
//       </div>
//     </div>
//   </li>
// );

export default VideoItem;
