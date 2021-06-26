import { Link } from "react-router-dom";

function UserStudioDetail(props) {
  const { userStudio, handleDeleteFitClass } = props;

  return (
    <div className="studio-detail-container">
      {/* show studio info including classes
      {/* if studio belongs currentuser  then give edit option */}
      <div className="written-studio-info-container">
        <h2>{userStudio?.business_name}</h2>
        <h4>
          <em>{userStudio?.location}</em>
        </h4>
        <Link to={`/my-studio/updatestudio/${userStudio?.id}`}>
          <button>Edit Profile</button>
        </Link>
        <p>{userStudio?.blurb}</p>
        <p>Contact:</p>
        <p>** get studio's owner email **</p>
      </div>
      <div className="weekly-studio-schedule-container">
        <p>Weekly Class Schedule:</p>
        {userStudio?.fit_classes.map((fitclass) => (
          <div className="class-box" key={fitclass.id}>
            <p>**TIME**</p>
            <p>{fitclass.class_name}</p>
            <Link to={`/my-studio/updateclass/${fitclass.id}`}>
              <button>EDIT</button>
            </Link>
            <button onClick={() => handleDeleteFitClass(fitclass.id)}>
              Delete
            </button>
          </div>
        ))}
        <Link to="/my-studio/createclass">
          <button>Add Class</button>
        </Link>
      </div>
    </div>
  );
}

export default UserStudioDetail;
