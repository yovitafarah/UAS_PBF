/* ============
 * Actions for the user module
 * ============
 *
 * The actions that are available on the
 * user module.
 */

import {
  USER_UPDATE,
  USER_UNSET,
    USER_LIST,
    USER_REMOVE,
USER_ADD
} from './action-types';

export function add(payload) {
  return {
    type: USER_ADD,
    payload
  }
}

export function userUpdate(payload) {
  return {
    type: USER_UPDATE,
    payload,
  };
}

export function unsetUser() {
  return {
    type: USER_UNSET,
  }
}
export function list(payload) {
  return {
    type: USER_LIST,
    payload
  }
}

export function remove(payload) {
  return {
    type: USER_REMOVE,
    payload
  }
}

