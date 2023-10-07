const { createApp } = Vue;

const demo = {
  data() {
    return {
      before: '',
      after: '',
    };
  },
  methods: {
    domPurityHandler() {
      this.after = DOMPurify.sanitize(this.before);
    }
  }
}

const App = createApp(demo).mount('#app');