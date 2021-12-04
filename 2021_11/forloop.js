//forloop

let greeting = "Hello"
for(let i = 0; i < 100; i ++){
  console.log(greeting)
}
 
//forloop 0f "name" + "loves to code!"

let names = ["Margie", "Richard", "Femi","Solange", "Gabe", "Arnell", "CLiff"];

//names.push( 'and ' + names.pop());

//names.push("Loves to code!");

for(let i = 0; i < names.length; i++){

  console.log(names[i] + ' Loves to code!')
  
}

//Given a string let = "with the alphabet" display only the vowels
let str = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"
const vowels = ['A','E','I','O','U']
for( let i = 0; i < str.length; i++)

if(vowels.includes(str[i])){ 
    console.log(str[i]);
}