/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import {
  mapActions,
  mapState
} from '../../../../../node_modules/vuex_3/dist/vuex.esm.browser.js';

import { FETCH_POSTS } from '../../store.js';

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
  computed: mapState(['isFetching', 'error', 'posts']),
  methods: mapActions([FETCH_POSTS]),
  mounted() {
    this[FETCH_POSTS]('resources/posts.json');
  },
  template: `
    <div>
      <Fetching v-if="isFetching" />
      <ErrorMessage v-else-if="error" message="error" />
      <PostList v-else :posts="posts" />
    </div>
  `
};
