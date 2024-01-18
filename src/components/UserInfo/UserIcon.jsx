const UserIcon = ({ userName = "smith", id }) => {
  return (
    <div className="d-flex flex-row align-items-center justify-content-center">
      <div>
        <div className="text-bg-light  p-1 mx-2 rounded-circle"></div>
      </div>
      <div className="userInfo">
        <h5>{userName}</h5>
        <p>{id}</p>
      </div>
    </div>
  );
};

export default UserIcon;
