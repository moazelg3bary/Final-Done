/*global let, console, alert, swal, prompt, $*/
export default class Parson {

    constructor (name, age) {
        this.name = name;
        this.age = age;
    };

    greet (friend) {
        console.log('Hello ' + friend);
    };

    static sayHello () {
        console.log('hello man');
    }
}
 let p1 = new Parson('moaz', 20);
Parson.sayHello();

const p1 = 1;

export {Parson, p1};