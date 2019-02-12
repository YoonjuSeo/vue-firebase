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
        },
        showName : true,
        showAge : true,
        items: ['Mushroom', 'Green Shells','Red Shell','Banana','Star'],
        ninjas : [
            {name : 'Crystal', age: 25, belt: 'Black'},
            {name : 'Ryu', age: 30, belt: 'Brown'},
            {name : 'Ken', age: 35, belt: 'Orange'}
        ]
    
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
        },
        toggleName(){
            this.showName = !this.showName
        },
        toggleAge(){
            this.showAge = !this.showAge
        }
    }
})

if(condition){
    //Do something

}