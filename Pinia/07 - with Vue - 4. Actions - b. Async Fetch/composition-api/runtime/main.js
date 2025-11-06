/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { createApp, onMounted } from 'vue';
import { createPinia, storeToRefs } from 'pinia';
import { usePostsStore } from './store.js';

const pinia = createPinia();

const PostList = {
  name: 'PostList',
  setup() {
    const store = usePostsStore();
    const { posts, loading, error } = storeToRefs(store);
    const { fetchPosts } = store;

    onMounted(() => {
      fetchPosts();
    });

    return { posts, loading, error };
  },
  template: `
    <div>
      <div v-if="loading">Loading posts...</div>
      <div v-else-if="error">Error: {{ error }}</div>
      <ul v-else>
        <li v-for="post in posts" :key="post.id">
          {{ post.title }}
        </li>
      </ul>
    </div>
  `
};

const app = createApp(PostList);
app.use(pinia);
app.mount('#app');
