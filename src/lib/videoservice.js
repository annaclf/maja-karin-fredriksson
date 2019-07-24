import axios from 'axios';

class VideoService {
  constructor() {
    this.videos = axios.create({
      baseURL: 'http://losganglios.com/wp-json/wp/v2'
    });
  }

  getVideos() {
    return this.videos.get('/videos?per_page=100');
  }
}

const videoService = new VideoService();

export default videoService;