// European Union Public License version 1.2
// Copyright © 2024 Rick Beerendonk

import { ref, onMounted } from 'vue';

export function useFetchPosts() {
  // Reactive state
  const isFetching = ref(false);
  const error = ref(null);
  const posts = ref([]);

  // Fetch posts function
  const fetchPosts = async () => {
    isFetching.value = true;
    error.value = null;

    try {
      const response = await fetch('resources/posts.json');
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      posts.value = await response.json();
    } catch (err) {
      error.value = err.message;
    } finally {
      isFetching.value = false;
    }
  };

  // Fetch posts on component mount
  onMounted(() => {
    fetchPosts();
  });

  return {
    isFetching,
    error,
    posts,
    fetchPosts
  };
}
