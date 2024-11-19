/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import ErrorMessage from './error-message.js';
import Fetching from './fetching.js';
import PostList from './post-list.js';

export default {
  name: 'PostListContainer',
  components: {
    ErrorMessage,
    Fetching,
    PostList
  },
  data() {
    return {
      isFetching: false,
      error: null,
      posts: []
    };
  },
  methods: {
    async fetchPosts() {
      this.isFetching = true;
      try {
        const response = await fetch('resources/posts.json');
        if (!response.ok) {
          throw Error(response.statusText);
        }
        const json = await response.json();
        this.posts = json;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.isFetching = false;
      }
    }
  },
  mounted() {
    this.fetchPosts();
  },
  template: `
    <Fetching v-if="isFetching" />
    <ErrorMessage v-else-if="error" message="error" />
    <PostList v-else :posts="posts" />
  `
};
