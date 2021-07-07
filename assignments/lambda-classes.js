// CODE here for your Lambda Classes

class Person{
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak(){
        return (`Hello, my name is ${this.name}, I am from ${this.location}`);
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
        return (`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        return (`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Instructor{
    constructor(attr){
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }
    listSubjects(){
        let string = '';
        for (let i=0; i < this.favSubjects.length; i++){
            string += this.favSubjects[i] + ' ';
        }
        return `${this.name}'s favorite subjects are ${string}`;
    }
    PRAssignment(subject){
        return (`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallange(subject){
        return (`${this.name} has begun the sprint challenge on ${subject}`);
    }
}


class ProjectManager extends Instructor{
    constructor(attr){
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standup(channel){
        return(`${this.name} announces to ${channel}, standy times!`);
    }
    debugCode(student, subject){
        return(`${this.name} debugs ${student.name}'s code on ${subject}`);
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
    favSubjects: ['Human Physiology','Biomechanics','Computer Science']
})

const pm = new ProjectManager({
    name: 'Steven',
    age: 30,
    location: 'Ohio',
    specialty: 'redux',
    favLanguage: 'Python',
    catchPhrase: 'Im so proud of you guys',
    gradClassName: 'CS1',
    favInstructor: 'Britt'
})



console.log(instructor.demo('JavaScript'));
console.log(instructor.grade(student, 'JavaScript'));



console.log(student.listSubjects());
console.log(student.PRAssignment('JavaScript IV'));
console.log(student.sprintChallange('JavaScript Fundamentals'));



console.log(pm.standup('@channel'));
console.log(pm.debugCode(student, 'Repl.it Challenge'));