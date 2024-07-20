import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import Task from "./components/Task";

export default function Home() {   
    const tasks = [
          { id: 1, title:"Read a book", isDone:true},
          { id: 2, title:"Take a shower", isDone:false},
          { id: 3, title:"Sleep", isDone:false},
    ];
      
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput />

        {/* task */}
        <Task {...tasks[0]}></Task>
        <Task {...tasks[1]}></Task>
        <Task {...tasks[2]}></Task>
      </div>

      {/* //footer section */}
      <Footer year="2024" fullname="Natapon Phairin" studentID="660610749"/>
    </div>
  );
}
