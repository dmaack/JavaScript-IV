// CODE here for your Lambda Classes

class Person{
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak(){
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person{
    constructor(attr){
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
}

class Student extends Instructor{
    constructor(attr){
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubject = attr.favSubject;
    }
    listSubjects(){
        console.log(`My favorite subjects are ${this.favSubject}`);
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallange(subject){
        console.log(`${this.name} has begun the sprint challenge on ${this.subject}`);
    }
}


class ProjectManager extends Instructor{
    constructor(attr){
        super(attr);
        this.grandClassName = attr.grandClassName;
        this.favInstructor = attr.favInstructor;
    }
    standup(slack){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}


const instructor = new Instructor({
    name: 'Britt',
    age: 30,
    location: 'Canada',
    specialty: 'redux',
    favLanguage: 'JavaScript',
    catchPhrase: 'write it in the thread'
})

const student = new Student({
    name: 'Dominique',
    age: 27,
    location: 'Utah',
    specialty: 'note taking',
    favLanguage: 'JavaScript',
    catchPhrase: '',
    previousBackground: 'Exercise Physiology',
    className: 'WEB23',
    favSubject: 'CSS'
})

const pm = new ProjectManager({
    name: 'Steven',
    age: 30,
    location: 'Ohio',
    specialty: 'redux',
    favLanguage: 'Python',
    catchPhrase: 'Im so proud of you guys',
    grandClassName: 'CS1',
    favInstructor: 'Britt'
})


console.log(instructor.demo());
console.log(student.listSubjects());
console.log(student.PRAssignment());
console.log(student.sprintChallange());
console.log(pm.standup());
console.log(pm.debugCode());