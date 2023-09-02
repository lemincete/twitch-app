import { TAppDispatch, TRootState } from "./index.type";

import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";

export const useAppDispatch = () => useDispatch<TAppDispatch>();

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector