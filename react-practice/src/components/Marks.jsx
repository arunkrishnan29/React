function Marks(props){
  return(<div>
    
    <p>Marks : {props.marks}</p>
    <p>Result : {props.marks >= 50 ? "Pass" : "Fail"}</p>
  </div>
  );
}
export default Marks;