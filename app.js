new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue master',
        name: 'Yoonju',
        url: 'https://www.youtube.com',
        classes: ['one','two']
    },
    methods: {
        greet(time){
            this.title
            return `Hello and good ${time}, ${this.name}!`
        }
    }
})