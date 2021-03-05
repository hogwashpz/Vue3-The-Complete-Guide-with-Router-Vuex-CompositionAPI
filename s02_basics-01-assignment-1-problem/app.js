const app = Vue.createApp({
    data() {
        return {
            name: 'Pavel',
            age: 33,
            image: 'https://picsum.photos/200/300'
        }
    },
    methods: {
        myAgeIn5years() {
            return this.age + 5;
        },
        favoriteNumber() {
            return Math.random();
        }
    }
});

app.mount('#assignment');