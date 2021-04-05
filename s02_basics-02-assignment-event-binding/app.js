const app = Vue.createApp({
    data() {
        return {
            keydownOutput: '',
            enterValueStore: '',
            enterValueVisible: 'Hit enter to display value!'
        };
    },
    methods: {
        showAlert() {
            alert('Showing alert!');
        },
        setEnterValue(event) {
            this.enterValueStore = event.target.value;
        },
        enterDisplayValue() {
            this.enterValueVisible = this.enterValueStore;
        }
    }
});

app.mount('#assignment');