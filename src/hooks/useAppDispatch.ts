import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../app/store';

/**
 * TypeScript enhanced `useDispatch` hook that knows about our AppDispatch type
 * Use this throughout your app instead of plain `useDispatch`
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();