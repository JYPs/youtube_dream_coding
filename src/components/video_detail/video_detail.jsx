import React from "react";
import styles from "./video_detail.module.css";

const Video_detail = ({ video, video: { snippet } }) => (
  <section className={styles.detail}>
    <iframe
      className={styles.video}
      title="youtube video player"
      type="text/html"
      width="100%"
      height="500px"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameBorder="0"
      allowFullScreen
    />
    <h2>{snippet.title}</h2>
    <h2>{snippet.channelTitle}</h2>
    <pre className={styles.description}>{snippet.description}</pre>
  </section>
);

export default Video_detail;
