import { Link } from "react-router-dom";
import { DateTime } from "luxon";
import Button from "react-bootstrap/Button";

function UserStudioDetail(props) {
  const { userStudio, handleDeleteFitClass } = props;

  return (
    <div className="studio-detail-container">
      {/* show studio info including classes
      {/* if studio belongs currentuser  then give edit option */}
      <div className="written-studio-info-container">
        <h2 className="studio-title">{userStudio?.business_name}</h2>
        <h4>
          <em>{userStudio?.location}</em>
        </h4>
        <Link to={`/my-studio/update-studio/${userStudio?.id}`}>
          <Button variant="outline-dark">Edit Profile</Button>
        </Link>
        <p>{userStudio?.blurb}</p>

        <p className="format">Format:</p>
        <p className="format">{userStudio?.format}</p>
      </div>
      <div className="weekly-studio-schedule-container">
        <p className="weekly-title">Weekly Class Schedule:</p>
        {userStudio?.fit_classes.map((fitclass) => (
          <div className="class-box" key={fitclass.id}>
            <p>
              {DateTime.fromISO(fitclass.schedule_time, {
                zone: "utc",
              }).toFormat("cccc t")}
            </p>
            <p>{fitclass.class_name}</p>
            <Link to={`/my-studio/update-class/${fitclass.id}`}>
              <Button variant="dark" className="edit-button">
                EDIT
              </Button>
            </Link>
            <Button
              className="delete-button"
              variant="danger"
              onClick={() => handleDeleteFitClass(fitclass.id)}
            >
              DELETE
            </Button>
          </div>
        ))}
        <Link to="/my-studio/create-class">
          <Button id="add-button">Add Class</Button>
        </Link>
      </div>
    </div>
  );
}

export default UserStudioDetail;
