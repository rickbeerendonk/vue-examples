/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { defineStore } from 'pinia';

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [],
    loading: false,
    error: null
  }),
  actions: {
    async fetchPosts() {
      this.loading = true;
      this.error = null;
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );
        this.posts = await response.json();
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    }
  }
});
