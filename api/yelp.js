import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 32_c6O6PgIodv0VtP5IbN4l2ep7-fhMsXJPqMegQ-Vul4K5ePukZZOI3jq-iEz7XWV5Gh0G-pQoVmsMtSbhUIA4K9Vv5WtwL-ts9ltmhitIIXssGo3t0Y3Qh5t-_XXYx',
  },
});
