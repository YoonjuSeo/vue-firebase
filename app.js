new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue master',
        name: 'Yoonju',
        url: 'https://www.youtube.com',
        classes: ['one','two'],
        wage : 10,
        coords: {
            x: 0,
            y: 0
        }
    },
    methods: {
        greet(time){
            this.title
            return `Hello and good ${time}, ${this.name}!`
        },
        changeWage(amount){
            this.wage += amount
        },
        logEvent(event){
            console.log(event)
        },
        logCoords(event){
            this.coords.x = event.offsetX
            this.coords.y = event.offsetY
        },
        updateName(event){
            //console.log(event.target.value)
            this.name = event.target.value
        },
        logMessage(){
            console.log('Hello World')
        }
    }
})