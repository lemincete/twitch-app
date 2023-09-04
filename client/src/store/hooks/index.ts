import { TAppDispatch, TRootState } from "../types";

import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";

export const useAppDispatch = () => useDispatch<TAppDispatch>();

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector