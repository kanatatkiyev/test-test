import { useDispatch as reduxDispatch } from 'react-redux';

import { AppDispatch } from '../store';

export const useDispatch = () => reduxDispatch<AppDispatch>();
