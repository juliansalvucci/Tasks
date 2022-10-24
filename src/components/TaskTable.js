import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toogleTask, showCompleted = false }) => {
  const tasksTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => {
        return <TaskRow task={task} key={task.name} toogleTask={toogleTask} />;
      });
  };

  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>{tasksTableRows(showCompleted)}</tbody>
    </table>
  );
};
