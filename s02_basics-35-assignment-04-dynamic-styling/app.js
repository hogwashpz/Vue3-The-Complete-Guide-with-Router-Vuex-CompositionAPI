const app = Vue.createApp({
    data()
    {
        return {
            userClass: '',
            isParagraphVisible: true,
            userStyleColor: ''
        };
    },
    computed:
    {
        paragraphClasses()
        {
            let classes = [];

            if (['user1', 'user2'].some(x => x === this.userClass))
            {
                classes.push(this.userClass);
            }
            else if (this.userClass !== '')
            {
                classes.push('userNotFound');
            }

            if (this.isParagraphVisible)
                classes.push('visible');
            else
                classes.push('hidden');

            return classes;
        }
    },
    methods: {
        toggleVisible() {
            this.isParagraphVisible = !this.isParagraphVisible;
        }
    }
});

app.mount('#assignment');