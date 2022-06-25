import React from "react";
import { connect } from "react-redux";
import FRIENDSDo from "./FRIENDS";
import "../styles.css";


const FRIENDSsList = ({ FRIENDSs,preference }) => {
  const [index,setIndex] = React.useState(0)
 const [pagination,setPagination] = React.useState([])
 const [list,setTotalList] = React.useState([])

 React.useEffect(()=>{
   let temp = []
   let preferences = []
   let nonpreference = []
   for(let i=0;i<FRIENDSs.length/4;i++){
     temp.push(i)
   }
   setPagination([...temp,])
   for(let i=0;i<FRIENDSs.length;i++){
    if(preference.includes(i)){
      preferences.push(FRIENDSs[i])
    }
    else {
      nonpreference.push(FRIENDSs[i])
    }
  }
  setTotalList([...preferences,...nonpreference])
 },[FRIENDSs.length])
 const handlePagination = (key) =>{
  setIndex(key)
 }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "fit-content",
        margin: "30px auto",
        height: "300px",
      }}
    >
      {list.slice(4*index,4*(index+1)).map((FRIENDS, i) => (
        <FRIENDSDo key={i} FRIENDS={FRIENDS} idx={i} />
      ))}
     
      <div   style={{
        display: "flex",
        justifyContent:'center',
        height: "100px",
      }}>
       {pagination.map((ele)=>
       <button key={ele}  className="pagebutton" onClick={()=>handlePagination(ele)}>{ele}</button>)}
    </div>
    </div>
  );
};
const mapStateToProps = ({ FRIENDSs,preference }) => ({
  FRIENDSs,
  preference
});
export default connect(mapStateToProps)(FRIENDSsList);
