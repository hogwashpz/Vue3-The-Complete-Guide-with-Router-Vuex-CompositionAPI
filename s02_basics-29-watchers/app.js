const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: ''
      //fullname: ''
    };
  },
  watch: {
    counter(value) {
      if (value > 50 || value < -50) {
        this.counter = 0;
      }
    }
  /* wacher wathc data prop - so need same name
     name(newValue, oldValue) - with second argument */
    // More code for one thig which is for compute prop better
    // name(value) {
    //   if (value === '')
    //     this.fullname = '';
    //   else
    //     this.fullname = value + ' ' + this.lastName;
    // },
    // lastName(value) {
    //   if (value === '')
    //     this.fullname = '';
    //   else
    //     this.fullname = this.name + ' ' + value;
    // }
  },
  computed: {
    fullname() {
      console.debug('Computed ran...');
      if (this.name === '' || this.lastName === '')
        return '';
      else
        return this.name + ' ' + this.lastName; 
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
