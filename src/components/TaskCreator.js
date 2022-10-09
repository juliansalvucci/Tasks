import {useState} from  'react';


export const TaskCreator = ({createTask}) => {

    const [nuevaTarea, setNuevaTarea] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      createTask(nuevaTarea);
      //localStorage.setItem('nuevaTarea', nuevaTarea); //Guardo en localStorage
      setNuevaTarea('');
    }

    return (
        <form onSubmit={handleSubmit} className="my-2 row">
          <div className='col-9'>
          <input type="text" placeholder='Ingrese una nueva tarea' value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)}
           className="form-control"/>
          </div>
        
        <div className='col-3'>
        <button className="btn btn-primary btn-sm">Guardar</button>


        </div>

     </form>
    )
}