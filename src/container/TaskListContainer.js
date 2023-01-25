import { connect } from "react-redux";
import TasksList from "components/TasksList";
const mapStateToProps = (state) => {
  return {
    todos: state.tasks,
  };
};
const TaskListContainer = connect(mapStateToProps, null)(TasksList);
export default TaskListContainer;
 