import React from "react";
import { useDispatch } from "react-redux";
import { reset, updateMenu } from "./actions";
import { fetchCurrentMenu, fetchCurrentOrders } from "../services/index";
import saveOrder from "../services/saveOrder";
import updateOrder from "../services/updateOrder";

export function useUpdateMenu() {
  const dispatch = useDispatch();
  return React.useCallback(newMenu => dispatch(updateMenu(newMenu)), [
    dispatch
  ]);
}
export function useUpdateOrder() {
  const dispatch = useDispatch();
  return React.useCallback(order => dispatch(updateOrder(order), [dispatch]));
}
export function useCurrentMenu() {
  const dispatch = useDispatch();
  return React.useCallback(() => dispatch(fetchCurrentMenu(), [dispatch]));
}
export function useCurrentOrders() {
  const dispatch = useDispatch();
  return React.useCallback(() => dispatch(fetchCurrentOrders(), [dispatch]));
}
export function useSaveOrder() {
  const dispatch = useDispatch();
  return React.useCallback(newOrder =>
    dispatch(saveOrder(newOrder), [dispatch])
  );
}
export function useReset() {
  const dispatch = useDispatch();
  return React.useCallback(() => dispatch(reset), [dispatch]);
}
