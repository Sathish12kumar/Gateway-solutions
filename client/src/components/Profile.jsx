import "./profile.css";
const Profile = ({ setprofilepop }) => {
  const username = localStorage.getItem("name");
  const usermail = localStorage.getItem("mail");
  return (
    <div className="profile">
      <div className="title">
        <h1>profile</h1>
        <button onClick={() => setprofilepop((val) => !val)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div className="content">
        <div className="name">hello! {username}</div>
        <div className="email">{usermail}</div>
      </div>
      <div className="btns">
        <button>update</button>
        <button onClick={() => localStorage.clear()}>logout</button>
      </div>
    </div>
  );
};

export default Profile;
