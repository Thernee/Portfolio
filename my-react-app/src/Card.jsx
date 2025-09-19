import profilePic from './assets/profile-pic.png';
export default function Card() {
  return (
    <div className='cards'>
      <div className="card">
        <img className='card-image' src={profilePic} alt="profile picture"></img>
        <h2 className='card-title'>Sani Abubakar Adam</h2>
        <p className='card-text'>Fullstack Software Developer. Familiar with NodeJs, NestJs, Flask and React</p>
      </div>
      <div className="card">
        <img className='card-image' src={profilePic} alt="profile picture"></img>
        <h2 className='card-title'>Sani Abubakar Adam</h2>
        <p className='card-text'>A Full-Stack Engineer specializing in Node.js and TypeScript, with hands-on experience building production-style backends and desktop apps. I deliver well-tested APIs, secure authentication flows, and packaged cross-platform Electron apps.</p>
      </div>
    </div>
  );
}