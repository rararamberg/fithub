import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getOneStudio, getUserStudio } from "../../services/studios";
import "./StudioDetail.css";
import { Link } from "react-router-dom";

function StudioDetail(props) {
  // set state for studio
  const [studioItem, setStudioItem] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const { currentUser } = props;

  // function to call single studio
  useEffect(() => {
    const fetchStudioItem = async () => {
      const studioData = await getOneStudio(id);
      setStudioItem(studioData);
    };
    const fetchMyStudio = async () => {
      const studioData = await getUserStudio();
      setStudioItem(studioData);
    };
    if (location.pathname === "/my-studio") {
      fetchMyStudio();
    } else {
      fetchStudioItem();
    }
  }, [id, location]);

  return (
    <div className="studio-detail-container">
      {/* show studio info including classes */}
      {/* if studio belongs currentuser  then give edit option */}
      <div className="written-studio-info-container">
        <h2>{studioItem?.business_name}</h2>
        <h4>
          <em>{studioItem?.location}</em>
        </h4>
        {currentUser && currentUser.id === studioItem?.user_id ? (
          <button>Edit Profile</button>
        ) : (
          <p>**</p>
        )}
        <p>{studioItem?.blurb}</p>
        <p>Contact:</p>
        <p>** get studio's owner email **</p>
      </div>
      <div className="weekly-studio-schedule-container">
        <p>Weekly Class Schedule:</p>
        {studioItem?.fit_classes.map((fitclass) => (
          <div className="class-box" key={fitclass.id}>
            {/* render datetime to just day of week and time */}
            <p>{fitclass.class_name}</p>
            {currentUser && currentUser.id === studioItem?.user_id ? (
              <Link to={`/updateclass/${fitclass.id}`}>
                <button>EDIT</button>
              </Link>
            ) : (
              <button>BOOK</button>
            )}
          </div>
        ))}
        {currentUser && currentUser.id === studioItem?.user_id ? (
          <Link to="/createclass">
            <button>Add Class</button>
          </Link>
        ) : (
          <p>**</p>
        )}
      </div>
    </div>
  );
}

export default StudioDetail;
