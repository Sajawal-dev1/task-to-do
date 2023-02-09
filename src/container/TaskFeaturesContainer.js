import { connect } from "react-redux";
import {
  editTask,
  deleteTask,
  toggleComplete,
  toggleShowField,
} from "redux/tasksSlice";
import TaskFeatures from "components/TaskFeatures";
import { bindActionCreators } from "redux";
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      editTask,
      deleteTask,
      toggleComplete,
      toggleShowField,
    },
    dispatch
  );
};
const TaskFeaturesContainer = connect(null, mapDispatchToProps)(TaskFeatures);
export default TaskFeaturesContainer;
