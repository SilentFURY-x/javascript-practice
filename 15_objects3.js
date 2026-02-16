const course = {
    courseName: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor)

const {courseInstructor: instructor} = course
console.log(instructor)

