import React, { useEffect } from "react";
import "./styles.css";
import InputField from "./components/InputField";
import FRIENDSsList from "./components/FRIENDSsList";
import { deleteAll, persistFRIENDSs } from "./redux/action/addFRIENDS.action";
import { connect } from "react-redux";
const App = ({ deleteAll, persistFRIENDSs }) => {
  useEffect(() => {
    persistFRIENDSs();
    window.localStorage.setItem("FRIENDSs2", JSON.stringify(["Shivani Singh","Vidhi Taneja","Shreyas Kaetik","Adam Teller","John Berry"]));
  }, [persistFRIENDSs]);

  return (
    <div className="App">
      <h1 style={{ textDecoration: "underline" }}> Friends List</h1>
      <InputField />
      <FRIENDSsList />
      <div>
        <button
          style={{ marginTop: "60px", cursor: "pointer" }}
          onClick={deleteAll}
        >
          {" "}
          Delete All
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteAll: () => dispatch(deleteAll()),
  persistFRIENDSs: () => dispatch(persistFRIENDSs())
});
export default connect(
  null,
  mapDispatchToProps
)(App);
