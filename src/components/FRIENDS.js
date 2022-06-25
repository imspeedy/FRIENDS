import React from "react";
import { connect } from "react-redux";
import "../styles.css";
import { deleteFRIENDS, editFRIENDS,preferenceFRIENDS,rempreferenceFRIENDS } from "../redux/action/addFRIENDS.action";

const FRIENDS = ({ FRIENDS, idx, deleteFRIENDS, editFRIENDS, selected, text,preferenceFRIENDS,preference,rempreferenceFRIENDS }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        border: "1px solid #ffffffa6",
        padding: "5px",
        cursor: "pointer",
        gap: '20px',
        width: '280px'
      }}
    >
      <div onClick={() => editFRIENDS(idx)}><b>{selected === idx ? text : FRIENDS}</b> <br></br>is a mutual friend</div>
      <div style={{ cursor: "pointer" }} className="FRIENDSbutton" onClick={() => deleteFRIENDS(idx)}>
        <img width="25" alt="selected" src="https://img.icons8.com/dotty/344/filled-trash.png" />
      </div>
      <div style={{ cursor: "pointer" }} className="FRIENDSbutton" onClick={() => {preference.includes(idx)?rempreferenceFRIENDS(idx):preferenceFRIENDS(idx)}}>
        {preference.includes(idx)?<img alt="selected" width="25" src="https://cdn-icons-png.flaticon.com/512/1828/1828614.png"/>:<img width="25" alt="selected" src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png"/>}
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteFRIENDS: key => dispatch(deleteFRIENDS(key)),
  editFRIENDS: key => dispatch(editFRIENDS(key)),
  preferenceFRIENDS: FRIENDS => dispatch(preferenceFRIENDS(FRIENDS)),
  rempreferenceFRIENDS: FRIENDS => dispatch(rempreferenceFRIENDS(FRIENDS)),
});

const mapStateToProps = ({ text, selected,preference }) => ({
  text,
  selected,
  preference
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FRIENDS);
