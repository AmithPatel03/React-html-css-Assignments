const findAverageGrade = (students) => {
    const totalGrade = students.reduce((accumulator, student) => accumulator + student.grade, 0)
    const averageGrade = totalGrade / students.length
    return averageGrade
}
const students = [{ name: "John", grade: 9 }, { name: "Alex", grade: 8.5 }, { name: "Bob", grade: 9.5 }]
const average = findAverageGrade(students)
console.log(average)
