import './App.css'
import Card from './components/Card'

function App() {
  const Employees = [
    { username: "Somesh Shakya", designation: "Software Engineer" },
    { username: "Amit Verma", designation: "Frontend Developer" },
    { username: "Priya Sharma", designation: "Backend Developer" },
    { username: "Rahul Gupta", designation: "UI/UX Designer" },
    { username: "Neha Singh", designation: "QA Engineer" }
  ];

  return (
    <>
    {Employees.map((item, index) => <Card key={index} user={item} />)}
    
    </>
  )
}

export default App
