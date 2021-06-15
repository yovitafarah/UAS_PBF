/* ============
 * Actions for the category module
 * ============
 *
 * The actions that are available on the
 * category module.
 */

import {
  CATEGORIES_ADD,
  CATEGORIES_UPDATE,
  CATEGORIES_REMOVE,
  CATEGORIES_LIST,
} from './action-types';

export function add(payload) {
  return {
    type: CATEGORIES_ADD,
    payload
  }
}

export function update(payload) {
  return {
    type: CATEGORIES_UPDATE,
    payload
  }
}

export function remove(payload) {
  return {
    type: CATEGORIES_REMOVE,
    payload
  }
}

export function list(payload) {
  return {
    type: CATEGORIES_LIST,
    payload
  }
}