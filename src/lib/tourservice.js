import axios from 'axios';

class TourService {
  constructor() {
    this.tour = axios.create({
      baseURL: 'https://api.sheety.co'
    });
  }

  getTour() {
    return this.tour.get('/1113d299-9a66-4cbd-8398-3ff8a1708a76');
  }
}

const tourService = new TourService();

export default tourService;