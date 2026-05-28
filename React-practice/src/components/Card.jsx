import user from '../assets/user.png'

export default function Card(){
  return (
    <div className="card-container">
        <img className="user-img" src={user} alt="UserImage" />
        <div className="user-info">
            <h3>John Doe</h3>
            <p>Software Engineer</p>
        </div>
        <div className="buttons">
          <button className="btn">Message</button>
          <button className="btn">Follow</button>
        </div>
    </div>
  );
}