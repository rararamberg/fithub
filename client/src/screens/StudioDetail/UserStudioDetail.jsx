import { Link } from "react-router-dom";
import { DateTime} from "luxon";

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
        <Link to={`/my-studio/update-studio/${userStudio?.id}`}>
          <button>Edit Profile</button>
        </Link>
        <p>{userStudio?.blurb}</p>
        <p>Contact:</p>
        <p>** get studio's owner email **</p>
      </div>
      <div className="weekly-studio-schedule-container">
        <p className="weekly-title">Weekly Class Schedule:</p>
        {userStudio?.fit_classes.map((fitclass) => (
          <div className="class-box" key={fitclass.id}>
            <p>{DateTime.fromISO(fitclass.schedule_time, {zone: 'America/Chicago'}).toFormat("cccc t")}</p>
            <p>{fitclass.class_name}</p>
            <Link to={`/my-studio/update-class/${fitclass.id}`}>
              <button className="edit-button">EDIT</button>
            </Link>
            <button className="delete-button" onClick={() => handleDeleteFitClass(fitclass.id)}>
              DELETE
            </button>
          </div>
        ))}
        <Link to="/my-studio/create-class">
          <button className="add-button">Add Class</button>
        </Link>
      </div>
    </div>
  );
}

export default UserStudioDetail;
