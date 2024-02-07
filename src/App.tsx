// import Button from '@/components/ui/Button.tsx';

import { useContext, useState } from 'react';

import Aside from './components/ui/Aside/Aside';
import Header from './components/ui/Header/Header';
import Main from './components/ui/Main/Main';
import { movieDataContext } from './context/movieDataContext';
import useFetchMovies from './hooks/API/useFetchMovies';
// import useMovies from './hooks/API/useMovies';
// https://www.omdbapi.com/?apikey=2cd75788&s=Money%20Heist
// const API_KEY = process.env.REACT_APP_API_KEY;
function App() {
  const MoviesContext = useContext(movieDataContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleHeaderSearch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MoviesContext.Provider value={useFetchMovies()}>
      <div className="grid min-h-dvh grid-cols-[auto,1fr] grid-rows-[auto,1fr] bg-bg">
        <Aside toggleSearch={toggleHeaderSearch} />
        <Header isOpen={isOpen} />
        <Main />
      </div>
    </MoviesContext.Provider>
  );
}

export default App;
