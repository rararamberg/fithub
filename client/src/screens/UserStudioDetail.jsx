import { useEffect, useState } from "react";
import { getUserStudio } from "../services/studios";

function UserStudioDetail() {
  const [studioItem, setStudioItem] = useState(null);

  useEffect(() => {
    const fetchUserStudio = async () => {
      const studioData = await getUserStudio();
      setStudioItem(studioData);
      console.log(studioItem);
    };
  }, []);
  return (
    <div className="studio-detail-container">
      <h2>User Studio Page</h2>
      {/* show studio info including classes
      {/* if studio belongs currentuser  then give edit option */}
      <div className="written-studio-info-container">
        <h2>{studioItem?.business_name}</h2>
        <h4>
          <em>{studioItem?.location}</em>
        </h4>
        <p>{studioItem?.blurb}</p>
        <p>Contact:</p>
        <p>** get studio's owner email **</p>
      </div>
      <div className="weekly-studio-schedule-container">
        <p>Weekly Class Schedule:</p>
        {studioItem?.fit_classes.map((fitclass) => (
          <div className="class-box" key={fitclass.id}>
            <p>**TIME**</p>
            <p>{fitclass.class_name}</p>
            <button>EDIT</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserStudioDetail;
