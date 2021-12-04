//Create an object called "student". Give it properties of name, age, grade (like 11th, 12th, etc), and scores (which will be an array of numbers 0-100 representing the last 5 student test scores. Also give the student object a method called "getGPA" which uses the student scores to then convert to an overall grade point average. Lastly, give the student object a method called "summary" which gives a summary of the students name, grade, and GPA.

let student = {
    name:"Alexandra",
    age:19,
    grade:"12th",
    scores:[88,77,79,95,100],
    getGPA:function(){
        let sum = 0
        for(let i = 0;i < student.scores.length;i++){
            sum += student.scores[i];
        }  

   let gpa = sum / student.scores.length
    if(gpa <= 100 && gpa >= 90){
        grade = 4.0;
    }else if (gpa < 90 && gpa >= 80 ){
        grade = 3.0;
    }else if (gpa <80 && gpa >=70){
        grade = 2.0;
    }else if (gpa <70){
        grade = 1.0
    }

   return grade
},
    summary: function(){
    let summary = `${this.name} is ${this.age} and in the ${this.grade} grade. Her gpa is ${this.getGPA()}.0. `
    console.log(summary);

    }
}
student.getGPA()
student.summary()





