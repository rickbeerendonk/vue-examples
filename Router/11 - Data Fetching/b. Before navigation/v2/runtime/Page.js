/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

function fetchPost(id, callback) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(json => {
      callback(json);
    })
    .catch(error => {
      console.log(error);
      callback(null, error.message);
    });
}

export default {
  data() {
    return {
      post: null,
      error: null
    };
  },
  // Before render:
  // This component isn't rendered yet.
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouterEnter');
    fetchPost(to.params.id, (post, err) => {
      next(vm => vm.setData(post, err));
    });
  },
  // Before update:
  // Route changes when this component is already rendered
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate');
    this.post = null;
    fetchPost(to.params.id, (post, err) => {
      this.setData(post, err);
      next();
    });
  },
  methods: {
    setData(post, err) {
      if (err) {
        this.error = err.toString();
      } else {
        this.post = post;
      }
    }
  },
  template: `
    <div class="post">
      <div v-if="error">
        Error: {{ error }}
      </div>

      <div v-if="post">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </div>
    </div>
  `
};
