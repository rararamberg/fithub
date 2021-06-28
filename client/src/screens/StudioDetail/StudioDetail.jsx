import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneStudio } from "../../services/studios";
import "./StudioDetail.css";
import { DateTime } from "luxon";

function StudioDetail() {
  // set state for studio
  const [studioItem, setStudioItem] = useState(null);
  const { id } = useParams();

  // function to call single studio
  useEffect(() => {
    const fetchStudioItem = async () => {
      const studioData = await getOneStudio(id);
      setStudioItem(studioData);
    };
    fetchStudioItem();
  }, [id]);

  return (
    <div className="studio-detail-container">
      {/* show studio info including classes */}
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
            {/* render datetime to just day of week and time */}
            <p>{DateTime.fromISO(fitclass.schedule_time, {zone: 'utc'}).toFormat("cccc t")}</p>
            <p>{fitclass.class_name}</p>
            <button className="book-button">BOOK</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudioDetail;
