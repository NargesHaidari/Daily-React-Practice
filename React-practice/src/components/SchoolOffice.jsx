import StudentCard from "./StudentCard";

export default function SchoolOffice(){
    const students = [
        { id: 1, name: "David", age: "17", grade: "11th grade" },
        { id: 2, name: "Meera", age: "18", grade: "12th grade" },
        { id: 3, name: "Nadia", age: "16", grade: "10th grade" },
        { id: 4, name: "Elina", age: "18", grade: "12th grade" },
        { id: 5, name: "Arman", age: "17", grade: "11th grade" },
    ];

    return(
        <div className="school-office">
            {students.map((student)=>(
                <StudentCard 
                    key = {student.id}
                    name = {student.name}
                    age = {student.age}
                    grade = {student.grade}
                />
            ))}
        </div>
    )
}