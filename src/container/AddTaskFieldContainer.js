import { connect } from "react-redux";
import { addTask } from "redux/tasksSlice";
import  AddTaskField  from "components/AddTaskField";
import { bindActionCreators } from "redux";
const reportsHeaderDispatch = (dispatch) => {
  return bindActionCreators(
    {
      addTask
    },
    dispatch
  );
};
 const AddTaskFieldContainer = connect(null, reportsHeaderDispatch)(AddTaskField);
export default AddTaskFieldContainer;
