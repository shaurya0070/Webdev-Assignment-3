import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";

export default function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aarav", score: 78 },
    { id: 2, name: "Diya", score: 35 },
    { id: 3, name: "Kabir", score: 52 },
  ]);

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score),
    };

    setStudents((prev) => [...prev, newStudent]);
  };

  const updateScore = (id, newScore) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id
          ? { ...student, score: Number(newScore) || 0 }
          : student
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <AddStudentForm onAddStudent={addStudent} />
      <StudentTable students={students} onUpdateScore={updateScore} />
    </div>
  );
}