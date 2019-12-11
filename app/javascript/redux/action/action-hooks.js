import React from "react";
import { useDispatch } from "react-redux";
import { reset, updateMenu } from "./index";
import fetchCurrentMenu from "../services/index";

export function useUpdateMenu() {
  const dispatch = useDispatch();
  return React.useCallback(newMenu => dispatch(updateMenu(newMenu)), [
    dispatch
  ]);
}
export function useCurrentMenu() {
  const dispatch = useDispatch();
  return React.useCallback(() => dispatch(fetchCurrentMenu(), [dispatch]));
}

export function useReset() {
  const dispatch = useDispatch();
  return React.useCallback(() => dispatch(reset), [dispatch]);
}