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
        keydownHandler(event) {
            this.keydownOutput = event.target.value;
        },
        setEnterValue(event) {
            this.enterValueStore = event.target.value;
        },
        enterDisplayValue() {
            this.enterValueVisible = this.enterValueStore;k
        }
    }
});

app.mount('#assignment');