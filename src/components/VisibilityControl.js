export const VisibilityControl = ({setShowCompleted, cleanTasks, isChecked}) => {

    const handleDelete = () => {
        if(window.confirm('¿Esta seguro que desea eliminar las tareas realizadas?')){
            cleanTasks();
        }
    }

    return(
        <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
            <div className="form-check form-switch">
            <input type="checkbox" checked={isChecked} onChange={(event) => setShowCompleted(event.target.checked) }
      className="form-check-input"/> 
      <label>Show Task Done</label> 

            </div>
     

      <button onClick={handleDelete} className="btn btn-danger btn-sm" >Clear</button>

    </div>
    )
}

