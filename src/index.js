import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import Youtube from './service/youtube';

// env에 넣어둠 -> (AIzaSyBJFnCjQwb1_TDPEgkFK7D4CcRzrS1G0g4), env 파일에 관한건 여기 참고 --> https://create-react-app.dev/docs/adding-custom-environment-variables
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
ReactDOM.render(
  // React.StrictMode = 자바스크립트의 'use strict' 와 동일, 엄격!!!!!!!, 배포시에는 활성화 되지 않아서 console에 오류가 안나옴~
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById('root')
);
