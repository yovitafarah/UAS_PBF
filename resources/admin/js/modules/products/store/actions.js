/* ============
 * Actions for the category module
 * ============
 *
 * The actions that are available on the
 * category module.
 */

import {
  PRODUCTS_ADD,
  PRODUCTS_UPDATE,
  PRODUCTS_REMOVE,
  PRODUCTS_LIST,
} from './action-types';

export function add(payload) {
  return {
    type: PRODUCTS_ADD,
    payload
  }
}

export function update(payload) {
  return {
    type: PRODUCTS_UPDATE,
    payload
  }
}

export function remove(payload) {
  return {
    type: PRODUCTS_REMOVE,
    payload
  }
}

export function list(payload) {
  return {
    type: PRODUCTS_LIST,
    payload
  }
}