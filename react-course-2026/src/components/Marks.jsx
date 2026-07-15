function Marks(){
  const marks=76;
  return(<div>
    <p>Marks : {marks}</p>
    <p>Result : {marks >= 50 ? "Pass" : "Fail"}</p>
  </div>
  );
}
export default Marks;