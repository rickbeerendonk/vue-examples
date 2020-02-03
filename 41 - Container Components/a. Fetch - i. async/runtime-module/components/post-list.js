/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Post from './post.js';

export default {
  name: 'PostList',
  components: {
    Post
  },
  props: ['posts'],
  template: `
    <ul>
      <li v-for="post in posts" :key="post.id"><Post :post="post" /></li>
    </ul>
  `
};
