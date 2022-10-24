import {useState, useEffect} from  'react';

import './App.css';
import {TaskCreator} from './components/TaskCreator';
import { TaskTable } from './components/TaskTable';
import { VisibilityControl } from './components/VisibilityControl';

function App() {

  const [taskItems, setTasksItems] = useState([]);

  const [showCompleted, setShowCompleted] = useState(false);

  function createTask(taskName){
    if(!taskItems.find(task => task.name === taskName)){ //Si la tarea no existe (devuelve undefined)
      setTasksItems([...taskItems, {name: taskName, done: false}]); //Se guardan las nuevas tareas.
    }
   
  }

  const cleanTasks = () => {
    setTasksItems(taskItems.filter(task => task.done === false)); 
    setShowCompleted(false); //Cuando elimine las tareas realizadas, esconder la opción de tareas realizadas.
  }

  const toogleTask = task => {
    setTasksItems(taskItems.map((t) => (t.name === task.name) ? {...t,done: !t.done}: t)); 
  }

  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if(data){
       setTasksItems(JSON.parse(data))
    }
  },[])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems));
  },[taskItems]);

  return (
    <main className="bg-info vh-100">
      <div className="container p-4 col-md-4 offset-md-4">
      <TaskCreator createTask={createTask}/>
    <TaskTable tasks={taskItems} toogleTask={toogleTask} />

    <VisibilityControl setShowCompleted={(checked) => setShowCompleted(checked)} cleanTasks={cleanTasks} isChecked = {showCompleted}/>

    {
      showCompleted === true && (
        <TaskTable tasks={taskItems} toogleTask={toogleTask} showCompleted = {showCompleted} />
      )   
    }
      </div>
  
  </main>

  )

 
  
}

export default App;
