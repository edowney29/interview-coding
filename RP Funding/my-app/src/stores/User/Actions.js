/*
 * action types
 */

export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const UPDATE_USER = "UPDATE_USER";

/*
 * action creators
 */

export function loading() {
  return { type: LOADING };
}

export function error(message) {
  return { type: ERROR, data: { message } };
}

export function updateUser(firstName, lastName, npiNumber, businessAddress, telephoneNumber, emailAddress) {
  return { type: UPDATE_USER, data: { firstName, lastName, npiNumber, businessAddress, telephoneNumber, emailAddress } };
}
