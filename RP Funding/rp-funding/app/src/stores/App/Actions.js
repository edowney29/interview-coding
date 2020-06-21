/*
 * action types
 */

export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const UPDATE_ROUTE = "UPDATE_ROUTE";
export function loading() {
  return { type: LOADING };
}

export function error(message) {
  return { type: ERROR, data: { message } };
}

export function updateRoute(currentRoute) {
  return { type: UPDATE_ROUTE, data: { currentRoute } };
}
