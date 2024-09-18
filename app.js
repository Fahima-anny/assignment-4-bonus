let students = [
    { id:1 , name:'anisa akter', age:17},
    { id:2 , name:'maimuna akter', age:16},
    { id:3 , name:'maisa rahman' ,age:13},
    { id:4 , name:'sharmin akter', age:38},
    { id:5 , name:'fahima akter', age:23},
    { id:6 , name:'salma rahman', age:45},
    { id:7 , name:'saima Akter', age:32}
]

function searchSame(students, search){
    let matched = []
    for(let student of students){
        if(student.name.toLowerCase().includes(search.toLowerCase())){
matched.push(student)
        }
    }
    return matched
}
// console.log(searchSame(students,'Akter'))



let a =3 
function add(n1,n2){
    let sum = n1+n2+a ;
    return sum
}
// console.log(add(1,2))

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)









