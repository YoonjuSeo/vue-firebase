new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue master',
        name: 'Yoonju'
    },
    methods: {
        greet(time){
            this.title
            return `Hello and good ${time}, ${this.name}!`
        }
    }
})