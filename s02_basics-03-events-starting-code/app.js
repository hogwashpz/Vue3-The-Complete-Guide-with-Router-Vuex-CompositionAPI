const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      //alert('Submitted!');
    },
    setName(event, lastName) {
      this.name = `${event.target.value} ${lastName}`; 
    },
    add(amount) {
      this.counter = this.counter + amount;
    },
    reduce(amount) {
      this.counter = this.counter - amount;
    }
  }
});

app.mount('#events');
