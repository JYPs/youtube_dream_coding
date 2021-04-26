class Youtube {
    constructor(key) {
        this.key = key;
        this.getRequestOptions = {
            method: "GET",
            redirect: "follow",
          };
    }

    // async로 변경한 예제
    async mostPopular() {      
          try {
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
                this.getRequestOptions
            );
            const result_1 = await response.json();
            return result_1.items;
        } catch (error) {
            return console.log("error", error);
        }
    }

    // async로 변환하지 않은 예제
    search(query) {
        return fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}$type=video&key=${this.key}`,
            this.getRequestOptions
          )
            .then((response) => response.json())
            .then((result) =>
              result.items.map((item) => ({ ...item, id: item.id.videoId }))
            )
    }
}

export default Youtube;