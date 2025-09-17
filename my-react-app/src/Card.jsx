import profilePic from './assets/profile-pic.png';
export default function Card() {
  return (
    <div className="card">
      <img className='card-image' src={profilePic} alt="profile picture"></img>
      <h2 className='card-title'>Sani Abubakar Adam</h2>
      <p>Fullstack Software Developer. Familiar with NodeJs, NestJs, Flask and React</p>
    </div>
  );
}