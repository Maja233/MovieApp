import { useEffect, useState } from 'react';

// const API_KEY = process.env.REACT_APP_API_KEY;
import { AllMovies } from '@/interfaces/global';
const useFetchMovies = () => {
  const [moviesData, setMoviesData] = useState<AllMovies>();
  // const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=14d3bf6c9e53f06f8e5811a598029c78`,
        );
        const data = await res.json();
        setMoviesData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
        setError('');
      }
    };
    fetchData();
  }, [loading, error]);
  return { moviesData, loading, error };
};
export default useFetchMovies;
