import { createContext } from 'react';

import { AllMovies } from '@/interfaces/global';

export const movieDataContext = createContext<AllMovies>({});
