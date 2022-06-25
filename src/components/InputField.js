import React from "react";
import { connect } from "react-redux";
import { addFRIENDS, addText, editAddFRIENDS } from "../redux/action/addFRIENDS.action";
const InputField = ({ addText, text, selected, addFRIENDS }) => {
  const handleChange = e => addText(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    if (selected || selected === 0)
      editAddFRIENDS({
        value: text,
        selected: selected
      });
    else addFRIENDS(text);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="FRIENDS"
        value={text}
        placeholder="Enter your friends name here..."
        onChange={handleChange}
      />
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  addFRIENDS: FRIENDS => dispatch(addFRIENDS(FRIENDS)),
  addText: value => dispatch(addText(value)),
  editAddFRIENDS: obj => dispatch(editAddFRIENDS(obj))
});
const mapStateToProps = ({ text, selected }) => ({
  text,
  selected
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputField);
