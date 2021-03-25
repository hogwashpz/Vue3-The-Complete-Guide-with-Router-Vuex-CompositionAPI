const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    fullname() {
      console.debug('Computed ran...');
      if (this.name === '')
        return '';
      else
        return this.name + ' ' + 'Žolnaj'; 
    }
  },
  methods: {
    outputFullname() {
      console.debug('Running again...');
      if (this.name === '')
        return '';
      else
        return this.name + ' ' + 'Žolnaj';
    },
    // this allways adding second name to data prop "name"
    // use two-way bidning
    setName(event) {
      this.name = event.target.value + ' Žolnaj';
    },

    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
