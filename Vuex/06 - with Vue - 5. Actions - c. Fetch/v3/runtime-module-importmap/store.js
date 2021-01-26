/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import * as Vuex from 'vuex';

const IS_FETCHING = 'isFetching';
const ERROR = 'error';
const POSTS = 'posts';
export const FETCH_POSTS = 'fetchPosts';

export default new Vuex.Store({
  state: {
    isFetching: false,
    error: null,
    posts: []
  },
  mutations: {
    [IS_FETCHING](state, payload) {
      state.isFetching = payload;
    },
    [ERROR](state, payload) {
      state.error = payload;
    },
    [POSTS](state, payload) {
      state.posts = payload;
    }
  },
  actions: {
    // Actions can contain arbitrary asynchronous operations.
    async [FETCH_POSTS]({ commit }, payload) {
      commit(IS_FETCHING, true);
      try {
        const response = await fetch(payload);
        if (!response.ok) {
          throw Error(response.statusText);
        }
        const json = await response.json();
        commit(POSTS, json);
      } catch (error) {
        commit(ERROR, error.message);
      } finally {
        commit(IS_FETCHING, false);
      }
    }
  }
});
