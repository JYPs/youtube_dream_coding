import axios from 'axios';

class Youtube {
    constructor(key) {
      this.youtube = axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: {key: key},
      });
    }

    // async로 변경한 예제
    async mostPopular() {      
      const response = await this.youtube.get('videos', {
        params: {
          part: 'snippet',
          chart: 'mostPopular',
          maxResults: 25,
        }
      });
      return response.data.items;
    }

    // async로 변환하지 않은 예제
    async search(query) {
      const response = await this.youtube.get('search', {
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: query,
        }
      });
      return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
    }
}

export default Youtube;