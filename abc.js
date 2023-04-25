
// function add (x, y) {
//     return x + y;
// }

// const subtract = (x, y) => {
//     return x - y; 
// }



// const multiply =(x, y) => x * y; 

// //const round = X => Math.round(X);
// function round(x){
//     return Math.round(x)
//     return x + y; 
//};


// console.log(add(5, 5));
//  doc.log(multiply(5, 5));
//  console.log(round(5.9999));
// // console.log(divide(5, 5));
// //console.log(subtract(10, 5));



// const apple= (x, y) => (x + y); 
// // const add = (x, y) => (x + y); 
// // const add = (x, y) => (x + y); 
// // const add = (x, y) => (x + y); 
// console.log(apple (5, 3));

const obj = {
name: "hassan",
print: function () {
console.log(this.name);
}
}

obj.print();  


let khan = {
name: "sam",
profile: "time",
phone: "0347-------1",
print: function () {
console.log(this.name);
console.log(this.profile);
alert("hello");
document.write(this.phone);

}
}

khan.print();




const jungle = {
name: "izhaan",
class: "5a,",    
school: "abc,",
area: "karachi",
country: "Pakistan",
print: function(){
    console.log(this.name);
    console.log(this.class);
    console.log(this.school);
    document.write(this.name);
    document.write(this.class);
    document.write(this.school);
    console.log(this.country);
    console.log(this.area);
    document.write(this.country);
    document.write(this.country);
}
}
jungle.print();