// Iterate over the students array and log the name and age of each student.

let students = [ { "name": "John", "age": 20, "grade": "A" },
                 { "name": "Alice", "age": 22, "grade": "B" },
                 { "name": "Bob", "age": 21, "grade": "C" }]

 students.forEach((ele)=>{

    let ans = ele.name +" - " + ele.age +" Year old"     
     
    console.log(ans);
    
})

