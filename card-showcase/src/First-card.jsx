import profilePic from './assets/profile-pic.png';

export default function FirstCard() {
  return (
    <div className='card'>
      <img className='card-image' src={profilePic} alt='profile picture'></img>
      <h2 className='card-title'>Sani Abubakar Adam</h2>
      <p className='card-details'>A Full-Stack Engineer specializing in Node.js and TypeScript (NestJS/Express), with hands-on experience building production-style backends and desktop apps (Electron + React). I deliver well-tested APIs, secure authentication flows (JWT + refresh cookies), and packaged cross-platform Electron apps.</p>
    </div>
  );
};