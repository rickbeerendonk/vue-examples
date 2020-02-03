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
    fetchPosts() {
      this.isFetching = true;
      fetch('resources/posts.json')
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .then(json => {
          this.posts = json;
        })
        .catch(error => {
          this.error = error.message;
        })
        .finally(() => {
          this.isFetching = false;
        });
    }
  },
  mounted() {
    this.fetchPosts();
  },
  template: `
    <div>
      <Fetching v-if="isFetching" />
      <ErrorMessage v-else-if="error" message="error" />
      <PostList v-else :posts="posts" />
    </div>
  `
};
