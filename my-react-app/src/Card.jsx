import profilePic from './assets/bg.jpg'

function Card(){
  return(
    <div className="card" >
      <img className="card-image" src={profilePic} alt="Profile Picture"></img>
      <h2 className="card-title" >Arun Krishnan</h2>
      <p className="card-text" >I am currently learning react</p>
    </div>
  )
}
export default Card