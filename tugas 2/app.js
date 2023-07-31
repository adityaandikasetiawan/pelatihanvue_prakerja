const myVue = new Vue({
  el: "#app",
  data: {
      lists: [],
      todo: '',
  },
  methods: {
      saveTodo() {
          this.lists.push(this.todo)
          this.todo = null
          if (this.lists.length >= 4) {
              alert("Hebat!!")
          }
      },
  },

});