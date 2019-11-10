import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState(false);

  const searchApi = async searchTerm => {
    try {
      setResults([]);
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        },
      });
      setResults(response.data.businesses);
      setStatus(true);
    } catch (err) {
      setVisible(true);
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);
  return {searchApi, results, visible, setVisible, status};
};
