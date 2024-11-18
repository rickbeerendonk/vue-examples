/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

export default {
  data() {
    return {
      loading: false,
      post: null,
      error: null
    };
  },
  created() {
    // View created and data is being observed, so we can
    // fetch the data
    this.fetchData();
  },
  watch: {
    // route changes, so we should
    // fetch the data again
    $route: 'fetchData'
  },
  methods: {
    fetchData() {
      // In Router v3, the watch (calling this function)
      // will be triggered when we move away from the page.
      // The new route won't have an id.
      // TODO: There is probably a better way.
      if (!this.$route.params.id) {
        return;
      }

      this.error = this.post = null;
      this.loading = true;
      fetch(
        `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
      )
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .then(json => {
          this.post = json;
        })
        .catch(error => {
          this.error = error.message;
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
  template: `
    <div v-if="loading">
      Loading...
    </div>

    <div v-if="error">
      Error: {{ error }}
    </div>

    <div v-if="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  `
};
